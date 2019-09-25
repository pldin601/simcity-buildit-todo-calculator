import { Commerce } from "../commerce";

export type FishMarketItemNames =
  | "fishConserves"
  | "fishSoup"
  | "sandwichWithLosos";

export type FishMarket = Commerce<FishMarketItemNames>;

export const fishMarketItems: FishMarket = {
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
