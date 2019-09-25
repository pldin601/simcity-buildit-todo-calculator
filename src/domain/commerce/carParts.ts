import { Commerce } from "../commerce";

export type CarPartsItemNames = "motorOil" | "carTire" | "engine";

export type CarParts = Commerce<CarPartsItemNames>;

export const carPartsItems: CarParts = {
  motorOil: {
    time: "16m",
    requires: {
      crudeOil: 2
    }
  },
  carTire: {
    time: "1h36m",
    requires: {
      crudeOil: 2,
      glue: 1,
      nails: 3
    }
  },
  engine: {
    time: "3h12m",
    requires: {
      electronicalComponents: 1,
      drill: 1,
      nails: 3
    }
  }
};
