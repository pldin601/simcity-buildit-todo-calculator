import {AbstractFactory} from "./AbstractFactory";

const whiteMountainsProductsData = {
  silk: { time: "6m" }
};

export type WhiteMountainsProducts = keyof typeof whiteMountainsProductsData;

export class WhiteMountainsFactory extends AbstractFactory<
  WhiteMountainsProducts
> {
  protected productsData = whiteMountainsProductsData;
}
