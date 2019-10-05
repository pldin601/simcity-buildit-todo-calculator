export interface ProductionPromise {
  time: number;
}

export interface Factory<Product extends string> {
  produce(product: Product, startTime: number): ProductionPromise;
  canProduce(product: string): product is Product;
  getQueueTime(): number;
}

export function latestPromise(promises: ProductionPromise[]) {
  return promises.reduce(
    (acc, item) => {
      acc.time = Math.max(acc.time, item.time);
      return acc;
    },
    { time: 0 }
  );
}
