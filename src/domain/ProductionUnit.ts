import {find, range} from "lodash";
import {ParallelFactory} from "./ParallelFactory";
import {CommonFactory} from "./factories/CommonFactory";
import {CoconutFactory} from "./factories/CoconutFactory";
import {FrostyFjordsFactory} from "./factories/FrostyFjordsFactory";
import {OilPlantFactory} from "./factories/OilPlantFactory";
import {WhiteMountainsFactory} from "./factories/WhiteMountainsFactory";
import {AnyProduct, Production} from "./Production";
import {Factory, latestPromise, ProductionPromise} from "./Factory";
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
import {ProductionPlanner} from "./ProductionPlanner";

export class ProductionUnit implements Production {
  private readonly solution: Factory<string>[];

  constructor(private planner: ProductionPlanner) {
    this.solution = [
      new ParallelFactory(50, CommonFactory),
      new ParallelFactory(5, CoconutFactory),
      new ParallelFactory(5, FrostyFjordsFactory),
      new ParallelFactory(5, OilPlantFactory),
      new ParallelFactory(5, WhiteMountainsFactory),

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
  }

  public produce(
    product: AnyProduct,
    quantity: number,
    startTime: number
  ): ProductionPromise {
    const solution = find(this.solution, it => it.canProduce(product));

    if (solution !== undefined) {
      return latestPromise(
        range(quantity).map(() => {
          const promise = solution.produce(product, startTime);
          this.planner.collectItem(product, promise.time);
          return promise;
        })
      );
    }

    throw new Error(`Production doesn't know how to produce ${product}`);
  }
}
