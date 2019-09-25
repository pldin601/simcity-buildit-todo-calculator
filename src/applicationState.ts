import calculate, { Order } from "./domain/calculate";

export interface InitialStep {
  type: "initial";
  orders: Order[];
}

export interface CalculatedStep {
  type: "calculated";
  orders: Order[];
  log: any[];
  currentPosition: number;
}

export type ApplicationSteps = InitialStep | CalculatedStep;

export const createCalculateAction = (orders: Order[]) => ({
  type: "CALCULATE" as "CALCULATE",
  orders
});
export const createGoBackAction = () => ({ type: "GO_BACK" as "GO_BACK" });

export function createApplicationReducer() {
  return (
    state: ApplicationSteps,
    action:
      | ReturnType<typeof createCalculateAction>
      | ReturnType<typeof createGoBackAction>
  ): ApplicationSteps => {
    switch (action.type) {
      case "CALCULATE": {
        const log = calculate(...action.orders);
        return {
          type: "calculated",
          orders: action.orders,
          log,
          currentPosition: 0
        };
      }
      case "GO_BACK": {
        return {
          type: "initial",
          orders: state.orders
        };
      }

      default: {
        return state;
      }
    }
  };
}
