export const buildingSuppliesItems = {
  nails: {
    time: "4m",
    requires: {
      metal: 2
    }
  },
  cement: {
    time: "40m",
    requires: {
      minerals: 2,
      chemicals: 1
    }
  },
  planks: {
    time: "24m",
    requires: {
      wood: 2
    }
  },
  glue: {
    time: "48m",
    requires: {
      plastic: 1,
      chemicals: 2
    }
  },
  bricks: {
    time: "16m",
    requires: {
      minerals: 2
    }
  },
  paint: {
    time: "48m",
    requires: {
      metal: 2,
      minerals: 1,
      chemicals: 2
    }
  }
};

export type BuildingSuppliesItems = keyof typeof buildingSuppliesItems;
