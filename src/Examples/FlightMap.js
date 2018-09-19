import React from "react";
import Geo from "../components/Geo";
import "echarts/map/js/world";
import data from "./flights.json"
const FlightMap = () => {
  function getAirportCoord(idx) {
    return [data.airports[idx][3], data.airports[idx][4]];
  }
  var routes = data.routes.map(function(airline) {
    return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
  });

  return (
    <Geo
      style={{ height: "850px", width: "100%" }}
      option={{
        title: {
          text: "World Flights",
          left: "center",
          textStyle: {
            color: "#eee"
          }
        },
        backgroundColor: "#003",
        tooltip: {
          formatter: function(param) {
            var route = data.routes[param.dataIndex];
            return (
              data.airports[route[1]][1] + " > " + data.airports[route[2]][1]
            );
          }
        },
        geo: {
          map: "world",
          left: 0,
          right: 0,
          silent: true,
          roam: true,
          itemStyle: {
            normal: {
              borderColor: "#003",
              color: "#005"
            }
          }
        },
        series: [
          {
            type: "lines",
            coordinateSystem: "geo",
            data: routes,
            large: true,
            largeThreshold: 100,
            lineStyle: {
              normal: {
                opacity: 0.05,
                width: 0.5,
                curveness: 0.3
              }
            },
            // 设置混合模式为叠加
            blendMode: "lighter"
          }
        ]
      }}
    />
  );
};

export default FlightMap;
