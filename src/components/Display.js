import React from "react";

import "./Display.css";

const Display = props => (
  <div>
    <div className={props.value >= 0 ? "Positive" : "Negative"}>
      {props.value}
    </div>
  </div>
);

export default Display;
