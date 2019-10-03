import convertTime from "../convertTime";

export interface FactoryPromise {
  time: number;
}

export type ProductsData<Product extends string> = {
  [K in Product]: { time: string };
};

export interface Factory<Product extends string> {
  order(product: Product, startTime: number): FactoryPromise;
  canProduce(product: Product): boolean;
  getQueueTime(): number;
}

export class AbstractFactory<Product extends string>
  implements Factory<Product> {
  protected productsData: ProductsData<Product> = {} as ProductsData<Product>;

  private queueTime: number = 0;

  public order(product: Product, startTime: number): FactoryPromise {
    if (!this.canProduce(product)) {
      throw new Error(`This factory doesn't produce ${product}`);
    }
    const max = Math.max(startTime, this.queueTime);
    const { time: productionTime } = this.productsData[product];
    this.queueTime = max + convertTime(productionTime);

    return { time: this.queueTime };
  }

  public canProduce(product: Product): boolean {
    return product in this.productsData;
  }

  public getQueueTime(): number {
    return this.queueTime;
  }
}
