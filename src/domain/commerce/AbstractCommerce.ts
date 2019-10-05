import {Commerce} from "../Commerce";
import {AnyProduct, Production} from "../Production";
import {latestPromise, ProductionPromise} from "../Factory";
import convertTime from "../convertTime";

export type Requires = Partial<
  {
    [K in AnyProduct]: number;
  }
>;

export type CommerceProductsData<Product extends string> = {
  [K in Product]: {
    time: string;
    requires: Requires;
  };
};

export abstract class AbstractCommerce<Product extends string>
  implements Commerce<Product> {
  protected abstract productsData: CommerceProductsData<Product>;

  private queueTime: number = 0;

  constructor(private production: Production) {}

  public produce(product: Product, startTime: number): ProductionPromise {
    if (!this.canProduce(product)) {
      throw new Error(`This factory doesn't produce ${product}`);
    }

    const { time, requires } = this.productsData[product];

    // Produce Requirements
    const promise = latestPromise(
      Object.entries(requires).map(([prod, qty]) =>
        this.production.produce(
          (prod as any) as AnyProduct,
          qty as number,
          startTime
        )
      )
    );

    // Produce Item
    const max = Math.max(promise.time, this.queueTime, startTime);
    this.queueTime = max + convertTime(time);

    return {
      time: this.queueTime
    };
  }

  public canProduce(product: string): product is Product {
    return product in this.productsData;
  }

  public getQueueTime(): number {
    return this.queueTime;
  }
}
