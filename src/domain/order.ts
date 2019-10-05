import {GroupedPlanItem, ProductionPlanner} from "./ProductionPlanner";
import {AnyProduct} from "./Production";
import {ProductionUnit} from "./ProductionUnit";

export type Order = Partial<
  {
    [K in AnyProduct]: number;
  }
>;

export function convertOrdersToPlan(...orders: Order[]): GroupedPlanItem[] {
  const planner = new ProductionPlanner();
  const unit = new ProductionUnit(planner);
  orders.forEach(order =>
    Object.entries(order).forEach(([product, quantity]) =>
      unit.produce(product as AnyProduct, quantity as number, 0)
    )
  );
  return planner.getPlanItems();
}
