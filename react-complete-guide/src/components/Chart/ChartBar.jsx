import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    // Con el '%' estamos convirtiendo en string automaticamente.
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/*La parte del style es una notacion de React. Lo que estamos pasando es un objeto, no es CSS puro. Por ejemplo para CSS la propiedad
          background-color: #c3b4f3; se declara con un guion del medio, en este caso se declararia backgroundColor:'red'; */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
