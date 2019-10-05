import {useReducer} from "react";
import {Order} from "./domain/order";
import {AnyProduct} from "./domain/Production";

export type OrderReducerState = Order[];

export type OrderReducerAction =
  | {
      type: "DELETE_ORDER";
      index: number;
    }
  | {
      type: "ADD_ORDER";
    }
  | {
      type: "ADD_TO_ORDER";
      index: number;
      item: AnyProduct;
    }
  | {
      type: "REMOVE_FROM_ORDER";
      index: number;
      item: AnyProduct;
    }
  | {
      type: "INCREMENT_QUANTITY";
      index: number;
      item: AnyProduct;
      amount: number;
    };

function reduceOrders(
  state: OrderReducerState = [],
  action: OrderReducerAction
) {
  switch (action.type) {
    case "ADD_ORDER":
      return [...state, {}];

    case "DELETE_ORDER":
      return state.filter((_, index) => index !== action.index);

    case "ADD_TO_ORDER":
      return state.map((order, index) => {
        if (index === action.index) {
          return { ...order, [action.item]: 1 };
        }
        return order;
      });

    case "REMOVE_FROM_ORDER":
      return state.map((order, index) => {
        if (index === action.index) {
          const { [action.item]: _, ...otherItems } = order;
          return otherItems;
        }
        return order;
      });

    case "INCREMENT_QUANTITY":
      return state.map((order, index) => {
        if (index === action.index) {
          return {
            ...order,
            [action.item]: (order[action.item] || 0) + action.amount
          };
        }
        return order;
      });

    default:
      return state;
  }
}

export function useOrderReducer(initialState: Order[] = []) {
  return useReducer(reduceOrders, initialState);
}
