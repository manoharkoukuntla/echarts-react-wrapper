import React from "react";
import Sankey from "../components/Sankey";
import data from "./product.json";
const SankeyWithData = () => {
  return (
    <Sankey
      style={{ height: "850px", width: "100%" }}
      option={{
        title: {
          text: "Sankey Diagram"
        },
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "sankey",
            layout: "none",
            data: data.nodes,
            links: data.links,
            focusNodeAdjacency: true,
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: "#aaa"
              }
            },
            lineStyle: {
              normal: {
                curveness: 0.5
              }
            }
          }
        ]
      }}
    />
  );
};

export default SankeyWithData;
