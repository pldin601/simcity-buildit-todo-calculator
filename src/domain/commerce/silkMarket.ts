import { Commerce } from "../commerce";

export type SilkMarketItemNames = "thread" | "fan" | "bathrobe";

export type SilkMarket = Commerce<SilkMarketItemNames>;

export const silkMarketItems: SilkMarket = {
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
