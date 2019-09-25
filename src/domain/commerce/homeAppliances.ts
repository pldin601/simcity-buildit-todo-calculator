export const homeAppliancesItems = {
  bbqGrill: {
    time: "2h45m",
    requires: {
      metal: 3,
      cookingUtensils: 1
    }
  },
  refrigerator: {
    time: "3h30m",
    requires: {
      plastic: 2,
      chemicals: 2,
      electronicalComponents: 2
    }
  },
  lightingSystem: {
    time: "1h45m",
    requires: {
      chemicals: 1,
      electronicalComponents: 1,
      glass: 1
    }
  },
  tv: {
    time: "2h30m",
    requires: {
      plastic: 2,
      glass: 2,
      electronicalComponents: 2
    }
  }
};

export type HomeAppliancesItems = keyof typeof homeAppliancesItems;
