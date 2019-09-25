import { findKey, range, min, isEqual, indexOf, orderBy } from "lodash";
import convertTime from "./convertTime";
import { createEmptySolution } from "./solution";
import { factories, FactoryItems } from "./factories";
import { CommerceItems, commerces } from "./commerce";

export type Order = Partial<
  {
    [K in FactoryItems | CommerceItems]: number;
  }
>;

function calculateProduct(product, solutionState) {
  const factoryKey = findKey(factories, it => product in it);
  const commerceKey = findKey(commerces, it => product in it);

  if (factoryKey) {
    const factory = factories[factoryKey];
    const factoryState = solutionState.factories[factoryKey];
    const minTime = min<number>(factoryState.timeQueues);
    const minTimeIndex = indexOf(factoryState.timeQueues, minTime);
    const timeToProduce = convertTime(factory[product].time);
    solutionState.log.push({
      time: factoryState.timeQueues[minTimeIndex],
      message: "START",
      product
    });
    factoryState.timeQueues[minTimeIndex] += timeToProduce;
    solutionState.log.push({
      time: factoryState.timeQueues[minTimeIndex],
      message: "FINISH",
      product
    });
    return factoryState.timeQueues[minTimeIndex] + 1;
  }

  if (commerceKey) {
    const commerce = commerces[commerceKey];
    const commerceProduct = commerce[product];
    const commerceState = solutionState.commerce[commerceKey];
    const timeToProduce = convertTime(commerceProduct.time);
    let startAt = commerceState.timeQueue;
    Object.keys(commerceProduct.requires).forEach(key => {
      const quantity = commerceProduct.requires[key];
      range(0, quantity).forEach(() => {
        startAt = Math.max(startAt, calculateProduct(key, solutionState));
      });
    });
    commerceState.timeQueue += timeToProduce;
    solutionState.log.push({
      time: startAt,
      message: "START",
      product
    });
    solutionState.log.push({
      time: startAt + timeToProduce,
      message: "FINISH",
      product
    });
    return startAt + 1;
  }

  throw new TypeError(`Unknown product - ${product}`);
}

function groupLog(log) {
  let groupedLog: any[] = [];
  let previousLog: any = null;
  let quantity: number = 0;
  log.forEach(it => {
    if (previousLog === null) {
      previousLog = it;
      quantity = 1;
    } else if (!isEqual(it, previousLog)) {
      groupedLog.push({ ...previousLog, quantity });
      previousLog = it;
      quantity = 1;
    } else {
      quantity += 1;
    }
  });
  if (quantity > 0) {
    groupedLog.push({ ...previousLog, quantity });
  }
  return groupedLog;
}

export default function calculate(...orders: Order[]) {
  const solutionState = createEmptySolution();
  let completeAt = 0;
  orders.forEach(order => {
    Object.keys(order).forEach(it => {
      range(0, order[it]).forEach(() => {
        completeAt = Math.max(completeAt, calculateProduct(it, solutionState));
      });
    });
  });
  return groupLog(
    orderBy(solutionState.log, ["time", "product"], ["asc", "asc"])
  );
}
