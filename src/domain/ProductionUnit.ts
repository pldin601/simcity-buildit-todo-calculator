import {find, range} from "lodash";
import {FactoryUnit} from "./FactoryUnit";
import {CommonFactory} from "./factories/CommonFactory";
import {CoconutFactory} from "./factories/CoconutFactory";
import {FrostyFjordsFactory} from "./factories/FrostyFjordsFactory";
import {OilPlantFactory} from "./factories/OilPlantFactory";
import {WhiteMountainsFactory} from "./factories/WhiteMountainsFactory";
import {AllProducts, Production} from "./Production";
import {Factory, latestPromise, ProductionPromise} from "./Factory";
import {Commerce} from "./Commerce";
import {BuildingSupplies} from "./commerce/BuildingSupplies";
import {CarParts} from "./commerce/CarParts";
import {DonutShop} from "./commerce/DonutShop";
import {FarmersMarket} from "./commerce/FarmersMarket";
import {FashionStore} from "./commerce/FashionStore";
import {FastFoodRestaurant} from "./commerce/FastFoodRestaurant";
import {FishMarket} from "./commerce/FishMarket";
import {FurnitureStore} from "./commerce/FurnitureStore";
import {GardeningSupplies} from "./commerce/GarderingSupplies";
import {HardwareStore} from "./commerce/HardwareStore";
import {HomeAppliances} from "./commerce/HomeAppliances";
import {SilkMarket} from "./commerce/SilkMarket";
import {TropicalProductsStore} from "./commerce/TropicalProductsStore";

export class ProductionUnit implements Production {
  private factories: Factory<string>[] = [
    new FactoryUnit(40, CommonFactory),
    new FactoryUnit(5, CoconutFactory),
    new FactoryUnit(5, FrostyFjordsFactory),
    new FactoryUnit(5, OilPlantFactory),
    new FactoryUnit(5, WhiteMountainsFactory)
  ];

  private commerce: Commerce<string>[] = [
    new BuildingSupplies(this),
    new CarParts(this),
    new DonutShop(this),
    new FarmersMarket(this),
    new FashionStore(this),
    new FastFoodRestaurant(this),
    new FishMarket(this),
    new FurnitureStore(this),
    new GardeningSupplies(this),
    new HardwareStore(this),
    new HomeAppliances(this),
    new SilkMarket(this),
    new TropicalProductsStore(this)
  ];

  public produce(product: AllProducts, quantity: number): ProductionPromise {
    const factory = find(this.factories, it => it.canProduce(product));

    if (factory !== undefined) {
      return latestPromise(
        range(quantity).map(() => factory.produce(product, 0))
      );
    }

    const commerce = find(this.commerce, it => it.canProduce(product));

    if (commerce !== undefined) {
      return latestPromise(
        range(quantity).map(() => commerce.produce(product, 0))
      );
    }

    throw new Error(`Production doesn't know how to produce ${product}`);
  }
}
