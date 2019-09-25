import * as React from "react";
import { render } from "react-dom";
import calculate from "./domain/calculate";

import "./styles.css";
import Quest from "./components/quest/Quest";

function App() {
  return <Quest log={calculate({ wood: 1 })} />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
