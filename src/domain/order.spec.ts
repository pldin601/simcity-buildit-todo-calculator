import {convertOrdersToPlan} from "./order";

test("Should convert order to plan", () => {
  const plan = convertOrdersToPlan({
    nails: 4,
    planks: 4,
    bricks: 4
  });

  expect(plan).toEqual([
    { product: "metal", time: 60, type: "collect", quantity: 8 },
    { product: "wood", time: 180, type: "collect", quantity: 8 },
    { product: "nails", time: 1020, type: "collect", quantity: 4 },
    { product: "minerals", time: 1800, type: "collect", quantity: 8 },
    { product: "planks", time: 6780, type: "collect", quantity: 4 },
    { product: "bricks", time: 10620, type: "collect", quantity: 4 }
  ]);
});
