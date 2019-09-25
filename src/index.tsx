import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from "./domain/calculate";
import Quest from "./components/quest/Quest";

function App() {
  return (
    <Quest
      log={calculate(
        { chemicals: 2, wood: 1, textiles: 1, flourBag: 2, treeSaplings: 1 },
        { hammer: 1, chairs: 1 },
        { chairs: 2, gardenFurniture: 2, tables: 1 }
      )}
    />
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
