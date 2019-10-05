import {AbstractFactory} from "./AbstractFactory";

const whiteMountainsProductsData = {
  silk: { time: "6m" }
};

export const products = Object.keys(whiteMountainsProductsData);

export type WhiteMountainsProducts = keyof typeof whiteMountainsProductsData;

export class WhiteMountainsFactory extends AbstractFactory<
  WhiteMountainsProducts
> {
  protected productsData = whiteMountainsProductsData;
}
