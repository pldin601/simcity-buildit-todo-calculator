import { Factory } from "../factories";

export type ColdFiordProductNames = "fish";

export const coldFiordFactory: Factory<ColdFiordProductNames> = {
  fish: { time: "6m" }
};
