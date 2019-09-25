import { CommonFactoryProductName, commonFactory } from "./factories/common";
import { CoconutFactoryProductName, coconutFactory } from "./factories/coconut";
import {
  OilPlantFactoryProductName,
  oilPlantFactory
} from "./factories/oilPlant";
import { ColdFiordProductNames, coldFiordFactory } from "./factories/coldFiord";
import {
  WhiteMountainsProductNames,
  whiteMountainsFactory
} from "./factories/whiteMountains";

export interface FactoryProduct {
  time: string;
}

export interface FactoryProduct {
  time: string;
}

export type Factory<T extends string> = { [key in T]: FactoryProduct };

export type AllFactoryProducts =
  | CommonFactoryProductName
  | CoconutFactoryProductName
  | OilPlantFactoryProductName
  | ColdFiordProductNames
  | WhiteMountainsProductNames;

export type FactoryNames =
  | "common"
  | "coconut"
  | "coldFiord"
  | "oilPlant"
  | "whiteMountains";

export const factories: { [K in FactoryNames]: Factory<any> } = {
  common: commonFactory,
  coconut: coconutFactory,
  coldFiord: coldFiordFactory,
  oilPlant: oilPlantFactory,
  whiteMountains: whiteMountainsFactory
};
