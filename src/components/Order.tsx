import * as React from "react";
import {Dispatch} from "react";
import {Button, Col, Table} from "reactstrap";
import ProductPicture from "./ProductPicture";
import {OrderReducerAction} from "../use/orderReducer";
import {Order as ProductionOrder} from "../domain/order";

export interface OrderProps {
  order: ProductionOrder;
  index: number;
  dispatch: Dispatch<OrderReducerAction>;
}

export const Order: React.FC<OrderProps> = ({ order, index, dispatch }) => {
  const handleDeleteOrderClick = React.useCallback(() => {
    dispatch({ type: "DELETE_ORDER", index });
  }, [index, dispatch]);

  const handleRemoveProductClick = React.useCallback(
    (product: any) => () => {
      dispatch({ type: "REMOVE_FROM_ORDER", index, product });
    },
    [index, dispatch]
  );

  const handleIncreaseQuantityClick = React.useCallback(
    (product: any) => () => {
      dispatch({ type: "INCREASE_QUANTITY", index, product, amount: 1 });
    },
    [index, dispatch]
  );

  const handleDecreaseQuantityClick = React.useCallback(
    (product: any) => () => {
      dispatch({ type: "INCREASE_QUANTITY", index, product, amount: -1 });
    },
    [index, dispatch]
  );

  return (
    <Col>
      <Table size={"sm"}>
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
                  <td>
                    <Button onClick={handleDecreaseQuantityClick(product)}>
                      -
                    </Button>
                    {quantity}
                    <Button onClick={handleIncreaseQuantityClick(product)}>
                      +
                    </Button>
                  </td>
                  <td>
                    <Button onClick={handleRemoveProductClick(product)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      <Button onClick={handleDeleteOrderClick}>Delete Order</Button>
    </Col>
  );
};
