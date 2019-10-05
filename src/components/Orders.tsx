import * as React from "react";
import {Dispatch} from "react";
import {Order} from "../domain/order";
import {OrderReducerAction} from "../orderReducer";
import {Button, Table} from "reactstrap";
import ProductPicture from "./ProductPicture";

export interface OrdersProps {
  orders: Order[];
  dispatch: Dispatch<OrderReducerAction>;
}

export const Orders: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <>
      {React.Children.toArray(
        orders.map((order, index) => {
          return (
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {React.Children.toArray(
                  Object.entries(order).map(([product, quantity]) => {
                    return (
                      <tr>
                        <td title={product}>
                          <ProductPicture product={product} />
                        </td>
                        <td>{quantity}</td>
                        <td>
                          <Button>Remove</Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          );
        })
      )}
    </>
  );
};
