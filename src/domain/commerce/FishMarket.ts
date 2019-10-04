import {AbstractCommerce} from "./AbstractCommerce";

const fishMarketData = {
  fishConserves: {
    time: "16m",
    requires: {
      fish: 1,
      metal: 1
    }
  },
  fishSoup: {
    time: "1h36h",
    requires: {
      vegetables: 1,
      fish: 2,
      cookingUtensils: 2
    }
  },
  sandwichWithLosos: {
    time: "2h24m",
    requires: {
      breadRoll: 1,
      fish: 2
    }
  }
};

export type FishMarketProducts = keyof typeof fishMarketData;

export class FishMarket extends AbstractCommerce<FishMarketProducts> {
  protected productsData = fishMarketData;
}
