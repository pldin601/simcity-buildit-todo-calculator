import {isEmpty, last, orderBy} from "lodash";
import {AnyProduct} from "./Production";

export interface PlanItem {
  product: AnyProduct;
  time: number;
}

export interface GroupedPlanItem {
  product: AnyProduct;
  quantity: number;
  time: number;
}

export class Planner {
  private items: PlanItem[] = [];

  public collectItem(product: AnyProduct, time: number) {
    this.items.push({ product, time });
  }

  public getPlan(): GroupedPlanItem[] {
    const orderedItems = orderBy(this.items, ["time"], ["asc"]);
    return groupPlanItems(orderedItems);
  }
}

function groupPlanItems(items: PlanItem[]): GroupedPlanItem[] {
  let groupedItems: GroupedPlanItem[] = [];

  items.forEach(it => {
    if (!isEmpty(groupedItems)) {
      const lastGroupedItem = last(groupedItems) as GroupedPlanItem;
      if (lastGroupedItem.product === it.product) {
        lastGroupedItem.quantity += 1;
        lastGroupedItem.time = it.time;
        return;
      }
    }
    groupedItems.push({ ...it, quantity: 1 });
  });

  return groupedItems;
}
