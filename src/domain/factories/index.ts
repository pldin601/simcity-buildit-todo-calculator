import { commonFactory, CommonItems } from "./common";
import { coconutFactory, CoconutItems } from "./coconut";
import { oilPlantFactory, OilPlantItems } from "./oilPlant";
import { coldFiordFactory, ColdFiordItems } from "./coldFiord";
import { whiteMountainsFactory, WhiteMountainsItems } from "./whiteMountains";

export const factories = {
  common: commonFactory,
  coconut: coconutFactory,
  coldFiord: coldFiordFactory,
  oilPlant: oilPlantFactory,
  whiteMountains: whiteMountainsFactory
};

export type FactoryItems =
  | CoconutItems
  | ColdFiordItems
  | OilPlantItems
  | WhiteMountainsItems
  | CommonItems;
