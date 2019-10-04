import {minBy, range} from "lodash";
import {Factory, ProductionPromise} from "./Factory";

export class ParallelFactory<Product extends string> implements Factory<Product> {
  private readonly factories: Array<Factory<Product>> = [];

  constructor(amount: number, ctor: { new (): Factory<Product> }) {
    this.factories = range(amount).map(() => new ctor());
  }

  public produce(product: Product, startTime: number): ProductionPromise {
    return this.getMostUnused().produce(product, startTime);
  }

  public canProduce(product: string): product is Product {
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
