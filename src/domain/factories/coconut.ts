import { Factory } from "../factories";

export type CoconutFactoryProductName = "coconut";

export const coconutFactory: Factory<CoconutFactoryProductName> = {
  coconut: { time: "6m" }
};
