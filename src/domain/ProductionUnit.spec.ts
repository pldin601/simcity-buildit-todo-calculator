import {ProductionUnit} from "./ProductionUnit";

test("Should create ProductionUnit without errors", () => {
  new ProductionUnit();
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

test("Should produce building supplies product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("nails", 1)).toEqual({ time: 300 });
});

test("Should produce car parts product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("carTire", 1)).toEqual({ time: 15840 });
});

test("Should produce donut shop product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("coffee", 1)).toEqual({ time: 28620 });
});

test("Should produce farmers market product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("cheese", 1)).toEqual({ time: 26940 });
});

test("Should produce fashion store product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("watch", 1)).toEqual({ time: 22860 });
});

test("Should produce fast food product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("pizza", 1)).toEqual({ time: 30516 });
});

test("Should produce fish market product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("fish", 1)).toEqual({ time: 360 });
});

test("Should produce furniture store product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("chairs", 1)).toEqual({ time: 1872 });
});

test("Should produce gardening product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("gardenGnomes", 1)).toEqual({ time: 14640 });
});

test("Should produce hardware store product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("hammer", 1)).toEqual({ time: 852 });
});

test("Should produce home appliances product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("tv", 1)).toEqual({ time: 34200 });
});

test("Should produce silk market product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("bathrobe", 1)).toEqual({ time: 26100 });
});

test("Should produce tropical product", () => {
  const unit = new ProductionUnit();
  expect(unit.produce("tropicalDrink", 1)).toEqual({ time: 26400 });
});
