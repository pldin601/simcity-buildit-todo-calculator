import calculate from "./calculate";

test("Calculate Metal", () => {
  const log = calculate({ metal: 1 });
  expect(log).toEqual([
    { time: 0, message: "START", product: "metal", quantity: 1 },
    { time: 60, message: "FINISH", product: "metal", quantity: 1 }
  ]);
});

test("Calculate Wood", () => {
  const log = calculate({ wood: 1 });
  expect(log).toEqual([
    { time: 0, message: "START", product: "wood", quantity: 1 },
    { time: 180, message: "FINISH", product: "wood", quantity: 1 }
  ]);
});

test("Calculate Nails", () => {
  const log = calculate({ nails: 1 });
  expect(log).toEqual([
    { time: 0, message: "START", product: "metal", quantity: 2 },
    { time: 60, message: "FINISH", product: "metal", quantity: 2 },
    { time: 61, message: "START", product: "nails", quantity: 1 },
    { time: 301, message: "FINISH", product: "nails", quantity: 1 }
  ]);
});
