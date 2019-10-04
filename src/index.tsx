import * as React from "react";
import {render} from "react-dom";
import Quest from "./components/quest/Quest";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {ProductionUnit} from "./domain/ProductionUnit";
import {Planner} from "./domain/Planner";

function App() {
  const planner = new Planner();
  const unit = new ProductionUnit(planner);
  unit.produce("tv", 10);
  return <Quest items={planner.getPlan()} />;
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
