import { Product } from "./product";

export type Order = Partial<{ [K in Product]: number }>;
