import {
  BuildingSuppliesItemNames,
  buildingSuppliesItems,
  BuildingSupplies
} from "./commerce/buildingSupplies";
import {
  HardwareStoreItemNames,
  hardwareStoreItems,
  HardwareStore
} from "./commerce/hardwareStore";
import {
  FarmersMarketItemNames,
  farmersMarketItems,
  FarmersMarket
} from "./commerce/farmersMarket";
import {
  GarderingSuppliesItemNames,
  garderingSuppliesItems,
  GarderingSupplies
} from "./commerce/garderingSupplies";
import {
  TropicalProductsStoreItemNames,
  tropicalProductsStoreItems,
  TropicalProducts
} from "./commerce/tropicalProductsStore";
import {
  FastFoodRestaurantItemNames,
  fastFoodRestaurantItems,
  FastFoodRestaurant
} from "./commerce/fastFoodRestaurant";
import {
  DonutShopItemNames,
  donutShopItems,
  DonutShop
} from "./commerce/donutShop";
import {
  FashionStoreItemNames,
  fashionStoreItems,
  FashionStore
} from "./commerce/fashionStore";
import {
  FurnitureStoreItemNames,
  furnitureStoreItems,
  FurnitureStore
} from "./commerce/furnitureStore";
import {
  HomeAppliancesItemNames,
  homeAppliancesItems,
  HomeAppliances
} from "./commerce/homeAppliances";
import {
  FishMarketItemNames,
  fishMarketItems,
  FishMarket
} from "./commerce/fishMarket";
import {
  SilkMarketItemNames,
  silkMarketItems,
  SilkMarket
} from "./commerce/silkMarket";
import {
  CarPartsItemNames,
  carPartsItems,
  CarParts
} from "./commerce/carParts";
import { Product } from "./product";

export interface CommerceProduct {
  time: string;
  requires: Partial<{ [K in Product]: number }>;
}

export type AllCommerceProducts =
  | CarPartsItemNames
  | TropicalProductsStoreItemNames
  | BuildingSuppliesItemNames
  | HardwareStoreItemNames
  | FarmersMarketItemNames
  | GarderingSuppliesItemNames
  | FastFoodRestaurantItemNames
  | DonutShopItemNames
  | FashionStoreItemNames
  | FurnitureStoreItemNames
  | HomeAppliancesItemNames
  | FishMarketItemNames
  | SilkMarketItemNames;

export type CommerceNames =
  | "buildingSupplies"
  | "carParts"
  | "donutShop"
  | "farmersMarket"
  | "fashionStore"
  | "fastFoodRestaurant"
  | "fishMarket"
  | "furnitureStore"
  | "garderingSupplies"
  | "hardwareStore"
  | "homeAppliances"
  | "silkMarket"
  | "tropicalProductsStore";

export type Commerces = {
  buildingSupplies: BuildingSupplies;
  carParts: CarParts;
  donutShop: DonutShop;
  farmersMarket: FarmersMarket;
  fashionStore: FashionStore;
  fastFoodRestaurant: FastFoodRestaurant;
  fishMarket: FishMarket;
  furnitureStore: FurnitureStore;
  garderingSupplies: GarderingSupplies;
  hardwareStore: HardwareStore;
  homeAppliances: HomeAppliances;
  silkMarket: SilkMarket;
  tropicalProductsStore: TropicalProducts;
};

export const commerces: Commerces = {
  buildingSupplies: buildingSuppliesItems,
  carParts: carPartsItems,
  donutShop: donutShopItems,
  farmersMarket: farmersMarketItems,
  fashionStore: fashionStoreItems,
  fastFoodRestaurant: fastFoodRestaurantItems,
  fishMarket: fishMarketItems,
  furnitureStore: furnitureStoreItems,
  garderingSupplies: garderingSuppliesItems,
  hardwareStore: hardwareStoreItems,
  homeAppliances: homeAppliancesItems,
  silkMarket: silkMarketItems,
  tropicalProductsStore: tropicalProductsStoreItems
};
