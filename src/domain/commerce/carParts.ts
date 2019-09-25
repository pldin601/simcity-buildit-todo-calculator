export const carPartsItems = {
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

export type CarPartsItems = keyof typeof carPartsItems;
