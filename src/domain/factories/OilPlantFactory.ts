import {AbstractFactory} from "./Factory";

const oilPlantProductsData = {
  crudeOil: { time: "6m" }
};

export type OilPlantFactoryProducts = keyof typeof oilPlantProductsData;

export class OilPlantFactory extends AbstractFactory<OilPlantFactoryProducts> {
  protected productsData = oilPlantProductsData;
}
