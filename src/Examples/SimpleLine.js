import React from "react";
import Line from "../components/Line";
const SimpleLine = () => {
  return (
    <Line
      style={{ height: "850px", width: "100%" }}
      option={{
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      }}
    />
  );
};

export default SimpleLine;
