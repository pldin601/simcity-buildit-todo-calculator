import { Factory } from "../factories";

export type CommonFactoryProductName =
  | "textiles"
  | "metal"
  | "seeds"
  | "animalFeed"
  | "sugarAndSpices"
  | "wood"
  | "minerals"
  | "electronicalComponents"
  | "glass"
  | "plastic"
  | "chemicals";

export const commonFactory: Factory<CommonFactoryProductName> = {
  textiles: { time: "3h" },
  metal: { time: "1m" },
  seeds: { time: "20m" },
  animalFeed: { time: "6h" },
  sugarAndSpices: { time: "4h" },
  wood: { time: "3m" },
  minerals: { time: "30m" },
  electronicalComponents: { time: "7h" },
  glass: { time: "5h" },
  plastic: { time: "9m" },
  chemicals: { time: "2h" }
};
