import { Commerce } from "../commerce";

export type HardwareStoreItemNames =
  | "hammer"
  | "cookingUtensils"
  | "measuringTape"
  | "ladder"
  | "shovel"
  | "drill";

export type HardwareStore = Commerce<HardwareStoreItemNames>;

export const hardwareStoreItems: HardwareStore = {
  hammer: {
    time: "11m12s",
    requires: {
      metal: 1,
      wood: 1
    }
  },
  cookingUtensils: {
    time: "36m",
    requires: {
      metal: 2,
      plastic: 2,
      wood: 2
    }
  },
  measuringTape: {
    time: "16m",
    requires: {
      metal: 1,
      plastic: 1
    }
  },
  ladder: {
    time: "48m",
    requires: {
      planks: 2,
      metal: 2
    }
  },
  shovel: {
    time: "24m",
    requires: {
      metal: 1,
      wood: 1,
      plastic: 1
    }
  },
  drill: {
    time: "1h36m",
    requires: {
      metal: 2,
      plastic: 2,
      electronicalComponents: 1
    }
  }
};
