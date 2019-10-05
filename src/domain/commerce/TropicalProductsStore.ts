import { AbstractCommerce } from "./AbstractCommerce";

const tropicalProductsStoreData = {
  coconutOil: {
    time: "16m",
    requires: {
      coconut: 2
    }
  },
  faceCream: {
    time: "1h12m",
    requires: {
      coconutOil: 2,
      chemicals: 2
    }
  },
  tropicalDrink: {
    time: "3h20m",
    requires: {
      fruitAndBerries: 2,
      coconut: 2,
      sugarAndSpices: 1
    }
  }
};

export const products = Object.keys(tropicalProductsStoreData);

export type TropicalProductsStoreProducts = keyof typeof tropicalProductsStoreData;

export class TropicalProductsStore extends AbstractCommerce<
  TropicalProductsStoreProducts
> {
  protected productsData = tropicalProductsStoreData;
}
