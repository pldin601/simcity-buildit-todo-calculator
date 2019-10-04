import {AbstractFactory} from "./AbstractFactory";

const coconutProductsData = {
  coconut: { time: "6m" }
};

export type CoconutFactoryProducts = keyof typeof coconutProductsData;

export class CoconutFactory extends AbstractFactory<CoconutFactoryProducts> {
  protected productsData = coconutProductsData;
}
