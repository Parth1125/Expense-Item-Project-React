import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
import ExpenseChart from "../Expenses/ExpenseChart";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxvalue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxvalue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
