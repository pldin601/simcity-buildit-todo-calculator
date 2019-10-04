import {GroupedPlanItem, Planner} from "./Planner";
import {AnyProduct} from "./Production";
import {ProductionUnit} from "./ProductionUnit";

export type Order = Partial<
  {
    [K in AnyProduct]: number;
  }
>;

export function convertOrdersToPlan(...orders: Order[]): GroupedPlanItem[] {
  const planner = new Planner();
  const unit = new ProductionUnit(planner);
  orders.forEach(order =>
    Object.entries(order).forEach(([product, quantity]) =>
      unit.produce(product as AnyProduct, quantity as number)
    )
  );
  return planner.getPlan();
}
