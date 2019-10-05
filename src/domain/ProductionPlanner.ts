import {isEmpty, last, orderBy} from "lodash";
import {AnyProduct} from "./Production";

export interface PlanItem {
  product: AnyProduct;
  type: "produce" | "collect";
  time: number;
}

export interface GroupedPlanItem extends PlanItem {
  quantity: number;
}

export class ProductionPlanner {
  private items: PlanItem[] = [];

  public produceItem(product: AnyProduct, time: number) {
    this.items.push({ product, time, type: "produce" });
  }

  public collectItem(product: AnyProduct, time: number) {
    this.items.push({ product, time, type: "collect" });
  }

  public getPlanItems(): GroupedPlanItem[] {
    const orderedItems = orderBy(this.items, ["time"], ["asc"]);
    return groupPlanItems(orderedItems);
  }
}

function groupPlanItems(items: PlanItem[]): GroupedPlanItem[] {
  let groupedItems: GroupedPlanItem[] = [];

  items.forEach(it => {
    if (!isEmpty(groupedItems)) {
      const lastGroupedItem = last(groupedItems) as GroupedPlanItem;
      if (
        lastGroupedItem.product === it.product &&
        lastGroupedItem.type === it.type
      ) {
        lastGroupedItem.quantity += 1;
        if (it.type === "collect") {
          lastGroupedItem.time = it.time;
        }
        return;
      }
    }
    groupedItems.push({ ...it, quantity: 1 });
  });

  return groupedItems;
}
