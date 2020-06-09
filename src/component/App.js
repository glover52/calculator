import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

const App = () => {
  const [appState, setAppState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  /**
   * Unlike the setState method found in class components, useState does not
   * automatically merge update objects. You can replicate this behavior by
   * combining the function updater form with object spread syntax.
   */
  const handleClick = (buttonName) => {
    setAppState(() => {
      return { ...appState, ...calculate(appState, buttonName) };
    })
  }

  return (
    <div className="component-app">
      <Display value={appState.next || appState.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;