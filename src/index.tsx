import * as React from "react";
import { render } from "react-dom";
import { Col, Container, Row } from "reactstrap";
import ProductionPlan from "./components/quest/ProductionPlan";
import { Orders } from "./components/Orders";
import { convertOrdersToPlan } from "./domain/order";
import { useOrderReducer } from "./use/orderReducer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const lastOrders = JSON.parse(localStorage.getItem("lastOrders") || "[]");
  const [orders, dispatch] = useOrderReducer(lastOrders);

  React.useEffect(() => {
    localStorage.setItem("lastOrders", JSON.stringify(orders));
  }, [orders]);

  const planItems = React.useMemo(() => {
    return convertOrdersToPlan.apply(null, orders);
  }, [orders]);

  return (
    <Container>
      <Row>
        <Col>
          <Orders orders={orders} dispatch={dispatch} />
        </Col>
        <Col>
          {planItems.length > 0 ? (
            <ProductionPlan items={planItems} />
          ) : (
            "Nothing to show."
          )}
        </Col>
      </Row>
    </Container>
  );
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
