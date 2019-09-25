import {
  BuildingSuppliesItems,
  buildingSuppliesItems
} from "./buildingSupplies";
import { CarPartsItems, carPartsItems } from "./carParts";
import { DonutShopItems, donutShopItems } from "./donutShop";
import { FarmersMarketItems, farmersMarketItems } from "./farmersMarket";
import { FashionStoreItems, fashionStoreItems } from "./fashionStore";
import {
  FastFoodRestaurantItems,
  fastFoodRestaurantItems
} from "./fastFoodRestaurant";
import { FishMarketItems, fishMarketItems } from "./fishMarket";
import { FurnitureStoreItems, furnitureStoreItems } from "./furnitureStore";
import {
  GarderingSuppliesItems,
  garderingSuppliesItems
} from "./garderingSupplies";
import { HardwareStoreItems, hardwareStoreItems } from "./hardwareStore";
import { HomeAppliancesItems, homeAppliancesItems } from "./homeAppliances";
import { SilkMarketItems, silkMarketItems } from "./silkMarket";
import {
  TropicalProductsStoreItems,
  tropicalProductsStoreItems
} from "./tropicalProductsStore";

export const commerces = {
  buildingSupplies: buildingSuppliesItems,
  carParts: carPartsItems,
  donutShop: donutShopItems,
  farmersMarket: farmersMarketItems,
  fashionStore: fashionStoreItems,
  fastFoodRestaurant: fastFoodRestaurantItems,
  fishMarket: fishMarketItems,
  furnitureStore: furnitureStoreItems,
  gardeningSupplies: garderingSuppliesItems,
  hardwareStore: hardwareStoreItems,
  homeAppliances: homeAppliancesItems,
  silkMarket: silkMarketItems,
  tropicalProductsStore: tropicalProductsStoreItems
};

export type CommerceItems =
  | BuildingSuppliesItems
  | CarPartsItems
  | DonutShopItems
  | FarmersMarketItems
  | FashionStoreItems
  | FastFoodRestaurantItems
  | FishMarketItems
  | FurnitureStoreItems
  | GarderingSuppliesItems
  | HardwareStoreItems
  | HomeAppliancesItems
  | SilkMarketItems
  | TropicalProductsStoreItems;
