import {minBy, range} from "lodash";
import {Factory, FactoryPromise} from "./Factory";

export class FactoryUnit<Products extends string> implements Factory<Products> {
  private readonly factories: Array<Factory<Products>> = [];

  constructor(amount: number, ctor: { new (): Factory<Products> }) {
    this.factories = range(amount).map(() => new ctor());
  }

  public order(product: Products, startTime: number): FactoryPromise {
    return this.getMostUnused().order(product, startTime);
  }

  canProduce(product: Products): boolean {
    return this.getMostUnused().canProduce(product);
  }

  public getQueueTime(): number {
    return this.getMostUnused().getQueueTime();
  }

  private getMostUnused() {
    const mostUnusedFactory = minBy(this.factories, it => it.getQueueTime());
    if (mostUnusedFactory === undefined) {
      throw new Error("Unit has no factories");
    }
    return mostUnusedFactory;
  }
}
