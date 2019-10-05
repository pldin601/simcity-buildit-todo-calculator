import {AbstractCommerce} from "./AbstractCommerce";

const donutShopData = {
  donuts: {
    time: "40m30s",
    requires: {
      flourBag: 1,
      sugarAndSpices: 1
    }
  },
  greenSmoothie: {
    time: "27m",
    requires: {
      vegetables: 1,
      fruitAndBerries: 1
    }
  },
  breadRoll: {
    time: "54m",
    requires: {
      flourBag: 2,
      cream: 1
    }
  },
  cherryCheeseCake: {
    time: "1h21m",
    requires: {
      flourBag: 1,
      fruitAndBerries: 1,
      cheese: 1
    }
  },
  frozenYogurt: {
    time: "3h36m",
    requires: {
      fruitAndBerries: 1,
      cream: 1,
      sugarAndSpices: 1
    }
  },
  coffee: {
    time: "54m",
    requires: {
      cream: 1,
      seeds: 2,
      sugarAndSpices: 1
    }
  }
};

export const products = Object.keys(donutShopData);

export type DonutShopProducts = keyof typeof donutShopData;

export class DonutShop extends AbstractCommerce<DonutShopProducts> {
  protected productsData = donutShopData;
}
