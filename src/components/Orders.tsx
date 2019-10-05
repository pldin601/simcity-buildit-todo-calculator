import * as React from "react";
import {Dispatch} from "react";
import {Button, Col, Row} from "reactstrap";
import {Order as OrderComponent} from "./Order";
import {Order} from "../domain/order";
import {OrderReducerAction} from "../use/orderReducer";

export interface OrdersProps {
  orders: Order[];
  dispatch: Dispatch<OrderReducerAction>;
}

export const Orders: React.FC<OrdersProps> = ({ orders, dispatch }) => {
  const handleCreateOrder = React.useCallback(
    () => dispatch({ type: "CREATE_ORDER" }),
    []
  );

  return (
    <>
      <Row>
        <Col>
          {React.Children.toArray(
            orders.map((order, index) => (
              <OrderComponent dispatch={dispatch} order={order} index={index} />
            ))
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
