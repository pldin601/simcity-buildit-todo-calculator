import {AbstractCommerce} from "./AbstractCommerce";

const fashionStoreData = {
  cap: {
    time: "54m",
    requires: {
      textiles: 2,
      measuringTape: 1
    }
  },
  shoes: {
    time: "1h7m",
    requires: {
      textiles: 2,
      plastic: 1,
      glue: 1
    }
  },
  watch: {
    time: "1h21m",
    requires: {
      plastic: 2,
      glass: 1,
      chemicals: 1
    }
  },
  businessSuits: {
    time: "3h9m",
    requires: {
      textiles: 3,
      measuringTape: 1,
      glue: 1
    }
  },
  backPack: {
    time: "2h15m",
    requires: {
      textiles: 2,
      plastic: 2,
      measuringTape: 1
    }
  }
};

export const products = Object.keys(fashionStoreData);

export type FashionStoreProducts = keyof typeof fashionStoreData;

export class FashionStore extends AbstractCommerce<FashionStoreProducts> {
  protected productsData = fashionStoreData;
}
