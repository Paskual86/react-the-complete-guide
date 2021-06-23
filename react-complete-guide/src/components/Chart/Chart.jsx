import React from "react";
/* ALGO MUY IMPORTANTE, REVISAR LOS IMPORTS. Si se intenta importar un archivo internamente, se produce un loop. Ejemplo: Estoy en el archivo Chart.jsx e intento importar
el archivo chart.jsx
import ChartBar from './Chart' */
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => (dataPoint.value));
    const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
