import {FactoryUnit} from "./factories/FactoryUnit";
import {CommonFactory} from "./factories/CommonFactory";
import {CoconutFactory} from "./factories/CoconutFactory";
import {FrostyFjordsFactory} from "./factories/FrostyFjordsFactory";
import {OilPlantFactory} from "./factories/OilPlantFactory";
import {WhiteMountainsFactory} from "./factories/WhiteMountainsFactory";

export class Production {
  private commonFactoryUnit = new FactoryUnit(40, CommonFactory);
  private coconutFactoryUnit = new FactoryUnit(5, CoconutFactory);
  private frostyFjordsUnit = new FactoryUnit(5, FrostyFjordsFactory);
  private oilPlantFactoryUnit = new FactoryUnit(5, OilPlantFactory);
  private whiteMountainsFactoryUnit = new FactoryUnit(5, WhiteMountainsFactory);
}
