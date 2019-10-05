import {AbstractFactory} from "./AbstractFactory";

const coconutProductsData = {
  coconut: { time: "6m" }
};

export const products = Object.keys(coconutProductsData);

export type CoconutFactoryProducts = keyof typeof coconutProductsData;

export class CoconutFactory extends AbstractFactory<CoconutFactoryProducts> {
  protected productsData = coconutProductsData;
}
