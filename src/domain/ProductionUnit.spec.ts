import {ProductionUnit} from "./ProductionUnit";
import {Planner} from "./Planner";
import {Production} from "./Production";

let unit: Production;
let planner: Planner;

beforeEach(() => {
  planner = new Planner();
  unit = new ProductionUnit(planner);
});

test("Should produce common factory product", () => {
  expect(unit.produce("metal", 1)).toEqual({ time: 60 });
});

test("Should produce coconut factory product", () => {
  expect(unit.produce("coconut", 1)).toEqual({ time: 360 });
});

test("Should produce frosty fjords factory product", () => {
  expect(unit.produce("fish", 1)).toEqual({ time: 360 });
});

test("Should produce oil plant factory product", () => {
  expect(unit.produce("crudeOil", 1)).toEqual({ time: 360 });
});

test("Should produce white mountains factory product", () => {
  expect(unit.produce("silk", 1)).toEqual({ time: 360 });
});

test("Should produce building supplies product", () => {
  expect(unit.produce("nails", 1)).toEqual({ time: 300 });
});

test("Should produce car parts product", () => {
  expect(unit.produce("carTire", 1)).toEqual({ time: 15840 });
});

test("Should produce donut shop product", () => {
  expect(unit.produce("coffee", 1)).toEqual({ time: 28620 });
});

test("Should produce farmers market product", () => {
  expect(unit.produce("cheese", 1)).toEqual({ time: 26940 });
});

test("Should produce fashion store product", () => {
  expect(unit.produce("watch", 1)).toEqual({ time: 22860 });
});

test("Should produce fast food product", () => {
  expect(unit.produce("pizza", 1)).toEqual({ time: 30516 });
});

test("Should produce fish market product", () => {
  expect(unit.produce("fish", 1)).toEqual({ time: 360 });
});

test("Should produce furniture store product", () => {
  expect(unit.produce("chairs", 1)).toEqual({ time: 1872 });
});

test("Should produce gardening product", () => {
  expect(unit.produce("gardenGnomes", 1)).toEqual({ time: 14640 });
});

test("Should produce hardware store product", () => {
  expect(unit.produce("hammer", 1)).toEqual({ time: 852 });
});

test("Should produce home appliances product", () => {
  expect(unit.produce("tv", 1)).toEqual({ time: 34200 });
});

test("Should produce silk market product", () => {
  expect(unit.produce("bathrobe", 1)).toEqual({ time: 26100 });
});

test("Should produce tropical product", () => {
  expect(unit.produce("tropicalDrink", 1)).toEqual({ time: 26400 });
});

test("Should planner be correctly invoked #1", () => {
  spyOn(planner, 'startItem');
  spyOn(planner, 'collectItem');
  unit.produce('metal', 1);
  expect(planner.startItem).toHaveBeenCalledWith('metal', 0);
  expect(planner.collectItem).toHaveBeenCalledWith('metal', 60);
});

test.only("Should planner be correctly invoked #2", () => {
  spyOn(planner, 'startItem');
  spyOn(planner, 'collectItem');
  unit.produce('hammer', 1);
  expect(planner.startItem).toHaveBeenCalledWith('metal', 0);
  expect(planner.collectItem).toHaveBeenCalledWith('metal', 60);
  expect(planner.startItem).toHaveBeenCalledWith('wood', 0);
  expect(planner.collectItem).toHaveBeenCalledWith('wood', 180);
  expect(planner.startItem).toHaveBeenCalledWith('hammer', 180);
  expect(planner.collectItem).toHaveBeenCalledWith('hammer', 852);
});
