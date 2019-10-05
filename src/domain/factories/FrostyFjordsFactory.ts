import {AbstractFactory} from "./AbstractFactory";

const frostyFjordsProductsData = {
  fish: { time: "6m" }
};

export const products = Object.keys(frostyFjordsProductsData);

export type FrostyFjordsProducts = keyof typeof frostyFjordsProductsData;

export class FrostyFjordsFactory extends AbstractFactory<FrostyFjordsProducts> {
  protected productsData = frostyFjordsProductsData;
}
