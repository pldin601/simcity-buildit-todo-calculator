import {CommonFactory} from "./CommonFactory";

test("Should produce metal", () => {
  const factory = new CommonFactory();
  expect(factory.canProduce("metal")).toBeTruthy();
});

test("Should tell when produce metall", () => {
  const factory = new CommonFactory();
  expect(factory.whenProduce("metal", 0)).toBe(60);
});

test("Should produce metal in 60 seconds of ordered instantly", () => {
  const factory = new CommonFactory();
  expect(factory.order("metal", 0)).toEqual({ time: 60 });
  expect(factory.order("metal", 0)).toEqual({ time: 120 });
});

test("Should produce metal in 60 seconds with delay when ordered with delay", () => {
  const factory = new CommonFactory();
  expect(factory.order("metal", 60)).toEqual({ time: 120 });
  expect(factory.order("metal", 60)).toEqual({ time: 180 });
});
