import { products as buildingSuppliesProducts } from "./commerce/BuildingSupplies";
import { products as carPartsProducts } from "./commerce/CarParts";
import { products as donutShopProducts } from "./commerce/DonutShop";

const products = [
  ...buildingSuppliesProducts,
  ...carPartsProducts,
  ...donutShopProducts
];

export default products;
