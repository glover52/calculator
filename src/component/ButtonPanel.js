import Button from "./Button";
import React from "react";

import "./ButtonPanel.css";

const ButtonPanel = (props) => {
  return (
    <div className="component-buttonpanel">
      <div>
        <Button name="AC" clickHandler={props.clickHandler} />
        <Button name="+/-" clickHandler={props.clickHandler} />
        <Button name="%" clickHandler={props.clickHandler} />
        <Button name="÷" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="7" clickHandler={props.clickHandler} />
        <Button name="8" clickHandler={props.clickHandler} />
        <Button name="9" clickHandler={props.clickHandler} />
        <Button name="x" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="4" clickHandler={props.clickHandler} />
        <Button name="5" clickHandler={props.clickHandler} />
        <Button name="6" clickHandler={props.clickHandler} />
        <Button name="-" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="1" clickHandler={props.clickHandler} />
        <Button name="2" clickHandler={props.clickHandler} />
        <Button name="3" clickHandler={props.clickHandler} />
        <Button name="+" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="0" clickHandler={props.clickHandler} wide />
        <Button name="." clickHandler={props.clickHandler} />
        <Button name="=" clickHandler={props.clickHandler} orange />
      </div>
    </div>
  );
}

export default ButtonPanel;