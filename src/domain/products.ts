import { products as commonFactoryProducts } from "./factories/CommonFactory";
import { products as coconutFactoryProducts } from "./factories/CoconutFactory";
import { products as frostyFjordsProducts } from "./factories/FrostyFjordsFactory";
import { products as oilPlantProducts } from "./factories/OilPlantFactory";
import { products as whiteMountainsProducts } from "./factories/WhiteMountainsFactory";

import { products as buildingSuppliesProducts } from "./commerce/BuildingSupplies";
import { products as carPartsProducts } from "./commerce/CarParts";
import { products as donutShopProducts } from "./commerce/DonutShop";
import { products as farmersMarketProducts } from "./commerce/FarmersMarket";
import { products as fashionStoreProducts } from "./commerce/FashionStore";
import { products as fastFoodRestaurantProducts } from "./commerce/FastFoodRestaurant";
import { products as fishMarketProducts } from "./commerce/FishMarket";
import { products as furnitureStoreProducts } from "./commerce/FurnitureStore";
import { products as gardeningSuppliesProducts } from "./commerce/GarderingSupplies";
import { products as hardwareStoreProducts } from "./commerce/HardwareStore";
import { products as homeAppliancesProducts } from "./commerce/HomeAppliances";
import { products as silkMarketProducts } from "./commerce/SilkMarket";
import { products as tropicalProductsStoreProducts } from "./commerce/TropicalProductsStore";

const products = [
  ...commonFactoryProducts,
  ...coconutFactoryProducts,
  ...frostyFjordsProducts,
  ...oilPlantProducts,
  ...whiteMountainsProducts,
  ...buildingSuppliesProducts,
  ...carPartsProducts,
  ...donutShopProducts,
  ...farmersMarketProducts,
  ...fashionStoreProducts,
  ...fastFoodRestaurantProducts,
  ...fishMarketProducts,
  ...furnitureStoreProducts,
  ...gardeningSuppliesProducts,
  ...hardwareStoreProducts,
  ...homeAppliancesProducts,
  ...silkMarketProducts,
  ...tropicalProductsStoreProducts
];

export default products;
