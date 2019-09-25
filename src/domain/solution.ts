export function createEmptySolution() {
  return {
    log: [],
    factories: {
      coconut: { timeQueues: new Array(5).fill(0) },
      coldFiord: { timeQueues: new Array(5).fill(0) },
      oilPlant: { timeQueues: new Array(5).fill(0) },
      whiteMountains: { timeQueues: new Array(5).fill(0) },
      common: { timeQueues: new Array(40).fill(0) }
    },
    commerce: {
      buildingSupplies: { timeQueue: 0 },
      carParts: { timeQueue: 0 },
      donutShop: { timeQueue: 0 },
      farmersMarket: { timeQueue: 0 },
      fashionStore: { timeQueue: 0 },
      fastFoodRestaurant: { timeQueue: 0 },
      fishMarket: { timeQueue: 0 },
      furnitureStore: { timeQueue: 0 },
      garderingSupplies: { timeQueue: 0 },
      hardwareStore: { timeQueue: 0 },
      homeAppliances: { timeQueue: 0 },
      silkMarket: { timeQueue: 0 },
      tropicalProductsStore: { timeQueue: 0 }
    }
  };
}
