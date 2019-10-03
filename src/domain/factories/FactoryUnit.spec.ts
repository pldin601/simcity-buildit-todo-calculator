import {FactoryUnit} from "./FactoryUnit";
import {CommonFactory} from "./CommonFactory";

test("Should initialize units with 4 common factories", () => {
  const units = new FactoryUnit(4, CommonFactory);
  expect(units.getQueueTime()).toBe(0);
});

test("Should produce 4 metals in parallel", () => {
  const units = new FactoryUnit(4, CommonFactory);
  expect(units.order("metal", 0)).toEqual({ time: 60 });
  expect(units.order("metal", 0)).toEqual({ time: 60 });
  expect(units.order("metal", 0)).toEqual({ time: 60 });
  expect(units.order("metal", 0)).toEqual({ time: 60 });
  expect(units.order("metal", 0)).toEqual({ time: 120 });
});
