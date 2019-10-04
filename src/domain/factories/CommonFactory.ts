import {AbstractFactory} from "./AbstractFactory";

const commonProductsData = {
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

export type CommonFactoryProducts = keyof typeof commonProductsData;

export class CommonFactory extends AbstractFactory<CommonFactoryProducts> {
  protected productsData = commonProductsData;
}
