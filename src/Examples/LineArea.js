import React from "react";
import Line from "../components/Line";
const LineArea = () => {
  return (
    <Line
      style={{ height: "850px", width: "100%" }}
      option={{
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      }}
    />
  );
};

export default LineArea;
