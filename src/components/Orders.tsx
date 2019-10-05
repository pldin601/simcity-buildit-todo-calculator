import * as React from "react";
import {Dispatch} from "react";
import {Order} from "../domain/order";
import {OrderReducerAction} from "../orderReducer";
import {Button, Col, Row, Table} from "reactstrap";
import ProductPicture from "./ProductPicture";
import {AnyProduct} from "../domain/Production";

export interface OrdersProps {
  orders: Order[];
  dispatch: Dispatch<OrderReducerAction>;
}

export const Orders: React.FC<OrdersProps> = ({ orders, dispatch }) => {
  const handleRemoveProductFromOrder = React.useCallback(
    (orderIndex: number, product: AnyProduct) => () =>
      dispatch({
        type: "REMOVE_FROM_ORDER",
        index: orderIndex,
        item: product
      }),
    []
  );

  const handleDeleteOrder = React.useCallback(
    (orderIndex: number) => () =>
      dispatch({ type: "DELETE_ORDER", index: orderIndex }),
    []
  );

  const handleCreateOrder = React.useCallback(
    () => dispatch({ type: "ADD_ORDER" }),
    []
  );

  const handleIncrementQuantity = React.useCallback(
    (product: any, index: number, amount: number) => () =>
      dispatch({
        type: "INCREMENT_QUANTITY",
        item: product as AnyProduct,
        index,
        amount
      }),
    []
  );

  return (
    <>
      <Row>
        <Col>
          {React.Children.toArray(
            orders.map((order, index) => {
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
                                <Button
                                  onClick={handleIncrementQuantity(
                                    product,
                                    index,
                                    -1
                                  )}
                                >
                                  -
                                </Button>
                                {quantity}
                                <Button
                                  onClick={handleIncrementQuantity(
                                    product,
                                    index,
                                    1
                                  )}
                                >
                                  +
                                </Button>
                              </td>
                              <td>
                                <Button
                                  onClick={handleRemoveProductFromOrder(
                                    index,
                                    product as AnyProduct
                                  )}
                                >
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </Table>
                  <Button onClick={handleDeleteOrder(index)}>
                    Delete Order
                  </Button>
                </Col>
              );
            })
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button block onClick={handleCreateOrder}>
            Create Order
          </Button>
        </Col>
      </Row>
    </>
  );
};
