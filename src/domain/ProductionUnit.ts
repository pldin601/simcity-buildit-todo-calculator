import {find, range} from "lodash";
import {FactoryUnit} from "./FactoryUnit";
import {CommonFactory} from "./factories/CommonFactory";
import {CoconutFactory} from "./factories/CoconutFactory";
import {FrostyFjordsFactory} from "./factories/FrostyFjordsFactory";
import {OilPlantFactory} from "./factories/OilPlantFactory";
import {WhiteMountainsFactory} from "./factories/WhiteMountainsFactory";
import {AllProducts, Production} from "./Production";
import {Factory, latestPromise, ProductionPromise} from "./Factory";

export class ProductionUnit implements Production {
  private commonFactoryUnit = new FactoryUnit(40, CommonFactory);
  private coconutFactoryUnit = new FactoryUnit(5, CoconutFactory);
  private frostyFjordsUnit = new FactoryUnit(5, FrostyFjordsFactory);
  private oilPlantFactoryUnit = new FactoryUnit(5, OilPlantFactory);
  private whiteMountainsFactoryUnit = new FactoryUnit(5, WhiteMountainsFactory);

  private factories: Factory<string>[] = [
    this.commonFactoryUnit,
    this.coconutFactoryUnit,
    this.frostyFjordsUnit,
    this.oilPlantFactoryUnit,
    this.whiteMountainsFactoryUnit
  ];

  public produce(product: AllProducts, quantity: number): ProductionPromise {
    const factory = find(this.factories, it => it.canProduce(product));

    if (factory !== undefined) {
      return latestPromise(
        range(quantity).map(() => factory.produce(product, 0))
      );
    }

    throw new Error();
  }
}
