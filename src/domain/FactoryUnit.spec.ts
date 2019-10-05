import {ParallelFactory} from "./ParallelFactory";
import {CommonFactory} from "./factories/CommonFactory";

test("Should initialize units with 4 common factories", () => {
  const units = new ParallelFactory(4, CommonFactory);
  expect(units.getQueueTime()).toBe(0);
});

test("Should produce 4 metals in parallel", () => {
  const units = new ParallelFactory(4, CommonFactory);
  expect(units.produce("metal", 0)).toEqual({ time: 60 });
  expect(units.produce("metal", 0)).toEqual({ time: 60 });
  expect(units.produce("metal", 0)).toEqual({ time: 60 });
  expect(units.produce("metal", 0)).toEqual({ time: 60 });
  expect(units.produce("metal", 0)).toEqual({ time: 120 });
});
