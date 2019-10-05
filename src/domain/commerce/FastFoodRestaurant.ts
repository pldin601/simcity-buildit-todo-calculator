import {AbstractCommerce} from "./AbstractCommerce";

const fastFoodRestaurantData = {
  icecreamSandwich: {
    time: "12m36s",
    requires: {
      breadRoll: 1,
      cream: 1
    }
  },
  pizza: {
    time: "21m36s",
    requires: {
      flourBag: 1,
      cheese: 1,
      beef: 1
    }
  },
  burgers: {
    time: "31m30s",
    requires: {
      beef: 1,
      breadRoll: 1,
      bbqGrill: 1
    }
  },
  cheeseFries: {
    time: "18m",
    requires: {
      vegetables: 1,
      cheese: 1
    }
  },
  lemonadeBottle: {
    time: "54m",
    requires: {
      glass: 2,
      sugarAndSpices: 2,
      fruitAndBerries: 1
    }
  }
};

export const products = Object.keys(fastFoodRestaurantData);

export type FastFoodRestaurantProducts = keyof typeof fastFoodRestaurantData;

export class FastFoodRestaurant extends AbstractCommerce<
  FastFoodRestaurantProducts
> {
  protected productsData = fastFoodRestaurantData;
}
