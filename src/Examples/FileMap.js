import React from "react";
import diskData from "./diskdata.json";
import TreeMap from "../components/TreeMap";
import echarts from "echarts";

const FileMap = () => {


  var formatUtil = echarts.format;

  const getLevelOption = () => {
    return [
      {
        itemStyle: {
          normal: {
            borderWidth: 0,
            gapWidth: 5
          }
        }
      },
      {
        itemStyle: {
          normal: {
            gapWidth: 1
          }
        }
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          normal: {
            gapWidth: 1,
            borderColorSaturation: 0.6
          }
        }
      }
    ];
  };
  return (
    <TreeMap
      style={{ height: "850px", width: "100%" }}
      option={{
        title: {
          text: "Disk Usage",
          left: "center"
        },

        tooltip: {
          formatter: function(info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name);
            }

            return [
              '<div class="tooltip-title">' +
                formatUtil.encodeHTML(treePath.join("/")) +
                "</div>",
              "Disk Usage: " + formatUtil.addCommas(value) + " KB"
            ].join("");
          }
        },

        series: [
          {
            name: "Disk Usage",
            type: "treemap",
            visibleMin: 300,
            label: {
              show: true,
              formatter: "{b}"
            },
            itemStyle: {
              normal: {
                borderColor: "#fff"
              }
            },
            levels: getLevelOption(),
            data: diskData
          }
        ]
      }}
    />
  );
};

export default FileMap;
