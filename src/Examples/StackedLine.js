import React from "react";
import Line from "../components/Line";
const StackedLine = () => {
  return (
    <Line
      style={{ height: "850px", width: "100%" }}
      option={{
        title: {
            text: 'Stacked Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:["data1", "data2", "data3", "data4", "data5"]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
              name: "data1",
              type: "line",
              stack: "总量",
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: "data2",
              type: "line",
              stack: "总量",
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: "data3",
              type: "line",
              stack: "总量",
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: "data4",
              type: "line",
              stack: "总量",
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: "data5",
              type: "line",
              stack: "总量",
              label: {
                normal: {
                  show: true,
                  position: "top"
                }
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
    }}
    />
  );
};

export default StackedLine;
