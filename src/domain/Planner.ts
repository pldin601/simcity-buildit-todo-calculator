import {AllProducts} from "./Production";

export interface PlanItem {
  product: AllProducts;
  time: number;
}

export class Planner {
  private items: PlanItem[] = [];

  public collectItem(product: AllProducts, time: number) {
    this.items.push({ product, time });
  }

  public getPlan() {
    return this.items;
  }
}
