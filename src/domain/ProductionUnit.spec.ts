import {ProductionUnit} from "./ProductionUnit";

test("Should create ProductionUnit without errors", () => {
  const unit = new ProductionUnit();
});

test("Should produce common factory product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("metal", 1)).toEqual({ time: 60 });
});

test("Should produce coconut factory product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("coconut", 1)).toEqual({ time: 360 });
});

test("Should produce frosty fjords factory product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("fish", 1)).toEqual({ time: 360 });
});

test("Should produce oil plant factory product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("crudeOil", 1)).toEqual({ time: 360 });
});

test("Should produce white mountains factory product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("silk", 1)).toEqual({ time: 360 });
});
