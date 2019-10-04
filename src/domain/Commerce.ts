import {Factory} from "./Factory";

export interface Commerce<Product extends string> extends Factory<Product> {}
