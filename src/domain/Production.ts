import {CommonFactoryProducts} from "./factories/CommonFactory";
import {CoconutFactoryProducts} from "./factories/CoconutFactory";
import {FrostyFjordsProducts} from "./factories/FrostyFjordsFactory";
import {OilPlantFactoryProducts} from "./factories/OilPlantFactory";
import {WhiteMountainsProducts} from "./factories/WhiteMountainsFactory";
import {ProductionPromise} from "./Factory";
import {BuildingSuppliesProducts} from "./commerce/BuildingSupplies";
import {CarPartsProducts} from "./commerce/CarParts";
import {DonutShopProducts} from "./commerce/DonutShop";
import {FarmersMarketProducts} from "./commerce/FarmersMarket";
import {FashionStoreProducts} from "./commerce/FashionStore";
import {FastFoodRestaurantProducts} from "./commerce/FastFoodRestaurant";
import {FishMarketProducts} from "./commerce/FishMarket";
import {FurnitureStoreProducts} from "./commerce/FurnitureStore";
import {GardeningSuppliesProducts} from "./commerce/GarderingSupplies";
import {HardwareStoreProducts} from "./commerce/HardwareStore";
import {HomeAppliancesProducts} from "./commerce/HomeAppliances";
import {SilkMarketProducts} from "./commerce/SilkMarket";
import {TropicalProductsStoreProducts} from "./commerce/TropicalProductsStore";

export type AnyProduct =
  | CommonFactoryProducts
  | CoconutFactoryProducts
  | FrostyFjordsProducts
  | OilPlantFactoryProducts
  | WhiteMountainsProducts
  | BuildingSuppliesProducts
  | CarPartsProducts
  | DonutShopProducts
  | FarmersMarketProducts
  | FashionStoreProducts
  | FastFoodRestaurantProducts
  | FishMarketProducts
  | FurnitureStoreProducts
  | GardeningSuppliesProducts
  | HardwareStoreProducts
  | HomeAppliancesProducts
  | SilkMarketProducts
  | TropicalProductsStoreProducts;

export interface Production {
  produce(product: AnyProduct, quantity: number): ProductionPromise;
}
