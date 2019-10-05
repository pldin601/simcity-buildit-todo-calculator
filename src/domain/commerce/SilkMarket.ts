import { AbstractCommerce } from "./AbstractCommerce";

export const silkMarketData = {
  thread: {
    time: "16m",
    requires: {
      silk: 2
    }
  },
  fan: {
    time: "2h",
    requires: {
      silk: 2,
      wood: 1,
      glue: 2
    }
  },
  bathrobe: {
    time: "3h12m",
    requires: {
      silk: 3,
      glue: 2,
      homeTextiles: 1
    }
  }
};

export const products = Object.keys(silkMarketData);

export type SilkMarketProducts = keyof typeof silkMarketData;

export class SilkMarket extends AbstractCommerce<SilkMarketProducts> {
  protected productsData = silkMarketData;
}
