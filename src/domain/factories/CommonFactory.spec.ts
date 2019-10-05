import {CommonFactory} from "./CommonFactory";

test("Should produce metal", () => {
  const factory = new CommonFactory();
  expect(factory.canProduce("metal")).toBeTruthy();
});

test("Should produce metal in 60 seconds of ordered instantly", () => {
  const factory = new CommonFactory();
  expect(factory.produce("metal", 0)).toEqual({ time: 60 });
  expect(factory.produce("metal", 0)).toEqual({ time: 120 });
});

test("Should produce metal in 60 seconds with delay when ordered with delay", () => {
  const factory = new CommonFactory();
  expect(factory.produce("metal", 60)).toEqual({ time: 120 });
  expect(factory.produce("metal", 60)).toEqual({ time: 180 });
});
