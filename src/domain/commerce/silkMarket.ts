export const silkMarketItems = {
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

export type SilkMarketItems = keyof typeof silkMarketItems;
