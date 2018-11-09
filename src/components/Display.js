import React from "react";

import "./Display.css";

const Display = props => (
  <div className={props.value >= 0 ? "Positive" : "Negative"}>
    {props.value}
  </div>
);

export default Display;
