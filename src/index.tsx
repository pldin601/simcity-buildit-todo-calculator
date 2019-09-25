import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quest from "./components/quest/Quest";
import {
  createApplicationReducer,
  createCalculateAction,
  initialState
} from "./applicationState";
import usePersistentState from "./utils/usePersistentState";

function App() {
  const [savedState, saveState] = usePersistentState("app-state", initialState);
  const [state, dispatch] = React.useReducer(
    createApplicationReducer(),
    savedState
  );

  React.useEffect(() => {
    saveState(state);
  }, [state, saveState]);

  React.useEffect(() => {
    dispatch(
      createCalculateAction([
        { chemicals: 2, wood: 1, textiles: 1, flourBag: 2, treeSaplings: 1 },
        { hammer: 1, chairs: 1 },
        { chairs: 2, gardenFurniture: 2, tables: 1 }
      ])
    );
  }, []);

  if (state.type === "initial") {
    return <>Initial State</>;
  } else if (state.type === "calculated") {
    return <Quest log={state.log} />;
  } else {
    return null;
  }
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
