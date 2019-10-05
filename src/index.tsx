import * as React from "react";
import {render} from "react-dom";
import {Col, Container, Row} from "reactstrap";
import ProductionPlan from "./components/quest/ProductionPlan";
import {convertOrdersToPlan} from "./domain/order";
import {useOrderReducer} from "./orderReducer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Orders} from "./components/Orders";

function App() {
  const [orders, dispatch] = useOrderReducer([
    {
      breadRoll: 2,
      bricks: 2,
      gardenFurniture: 2
    }
  ]);

  const planItems = React.useMemo(() => {
    return convertOrdersToPlan(...orders);
  }, [orders]);

  return (
    <Container>
      <Row>
        <Col>
          <Orders orders={orders} dispatch={dispatch} />
        </Col>
        <Col>
          {orders.length > 0 ? <ProductionPlan items={planItems} /> : 'Nothing to show.'}
        </Col>
      </Row>
    </Container>
  );
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
