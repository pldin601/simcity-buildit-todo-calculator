import convertTime from "../convertTime";
import {Factory, ProductionPromise} from "../Factory";

export type ProductsData<Product extends string> = {
  [K in Product]: { time: string };
};

export abstract class AbstractFactory<Product extends string>
  implements Factory<Product> {
  protected abstract productsData: ProductsData<Product>;

  private queueTime: number = 0;

  public produce(product: Product, startTime: number): ProductionPromise {
    if (!this.canProduce(product)) {
      throw new Error(`This factory doesn't produce ${product}`);
    }

    const max = Math.max(startTime, this.queueTime);
    const { time: productionTime } = this.productsData[product];

    this.queueTime = max + convertTime(productionTime);

    return { time: this.queueTime };
  }

  public canProduce(product: string): product is Product {
    return product in this.productsData;
  }

  public getQueueTime(): number {
    return this.queueTime;
  }
}
