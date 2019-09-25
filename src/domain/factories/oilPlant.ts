import { Factory } from "../factories";

export type OilPlantFactoryProductName = "crudeOil";

export const oilPlantFactory: Factory<OilPlantFactoryProductName> = {
  crudeOil: { time: "6m" }
};
