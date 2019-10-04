import * as React from "react";
import {render} from "react-dom";
import Quest from "./components/quest/Quest";
import {convertOrdersToPlan} from "./domain/order";
import {useOrderReducer} from "./order-reducer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, NavItem, NavLink} from "reactstrap";

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
      <Nav pills={true} fill={true}>
        <NavItem>
          <NavLink>Orders</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={true}>Production Plan</NavLink>
        </NavItem>
      </Nav>
      <Quest items={planItems} />
    </Container>
  );
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
