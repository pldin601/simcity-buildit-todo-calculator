import * as React from "react";
import { render } from "react-dom";
import calculate from "./domain/calculate";

import "./styles.css";

function App() {
  return <pre>{JSON.stringify(calculate(), null, 2)}</pre>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
