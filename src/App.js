import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import SimpleLine from "./Examples/SimpleLine";
import LineArea from "./Examples/LineArea";
import SmoothLine from "./Examples/SmoothLine";
import StackedArea from "./Examples/StackedArea";
import StackedLine from "./Examples/StackedLine";
import LargeScaleArea from "./Examples/LargeScaleArea";
import AnimatedBar from "./Examples/AnimatedBar";
import ZoomableData from "./Examples/ZoomableData";
import MultipleYaxis from "./Examples/MutlipeYaxis";
import SimplePie from "./Examples/SimplePie";
import NightingaleRoseDiagram from "./Examples/NightingaleRoseDiagram";
import SimpleScatter from "./Examples/SimpleScatter";
import GeoScatter from "./Examples/GeoScatter";
import LinearRegression from "./Examples/LinearRegression";
import WorldPopulation from "./Examples/WorldPopulation";
import WorldPopulationGeo from "./Examples/WorldPopulationGeo";
import FlightMap from "./Examples/FlightMap";
import BasicHeatMap from "./Examples/BasicHeatMap";
import HeatMapPiecewise from "./Examples/HeatMapPiecewise";
import HeatMapSelection from "./Examples/HeatMapSelection";
import BasicTreeMap from "./Examples/BasicTreeMap";
import FileMap from "./Examples/FileMap";
import BasicSankey from "./Examples/BasicSankey";
import SankeyWithData from "./Examples/SankeyWithData";
import BasicFunnel from "./Examples/BasicFunnel";

class App extends Component {
  render() {
    return (
      <div className="App main-content columns is-fullheight">
        <NavBar />
        <div className="container column is-9">
          <Switch>
            <Route exact path="/" component={SimpleLine} />
            <Route exact path="/line" component={SimpleLine} />
            <Route exact path="/line-area" component={LineArea} />
            <Route exact path="/line-smooth" component={SmoothLine} />
            <Route exact path="/stacked-area" component={StackedArea} />
            <Route exact path="/stacked-line" component={StackedLine} />
            <Route exact path="/large-scale-area" component={LargeScaleArea} />
            <Route exact path="/animated-bar" component={AnimatedBar} />
            <Route exact path="/zoom-bar" component={ZoomableData} />
            <Route exact path="/multiple-y" component={MultipleYaxis} />
            <Route exact path="/simple-pie" component={SimplePie} />
            <Route
              exact
              path="/nightingale-pie"
              component={NightingaleRoseDiagram}
            />
            <Route exact path="/simple-scatter" component={SimpleScatter} />
            <Route exact path="/geo-scatter" component={GeoScatter} />
            <Route
              exact
              path="/linear-regression"
              component={LinearRegression}
            />
            <Route exact path="/world-population" component={WorldPopulation} />
            <Route exact path="/flights" component={FlightMap} />
            <Route
              exact
              path="/world-population-geo"
              component={WorldPopulationGeo}
            />
            <Route exact path="/basic-heat-map" component={BasicHeatMap} />
            <Route
              exact
              path="/piecewise-heat-map"
              component={HeatMapPiecewise}
            />
            <Route
              exact
              path="/selection-heat-map"
              component={HeatMapSelection}
            />
            <Route exact path="/basic-tree-map" component={BasicTreeMap} />
            <Route exact path="/disk-tree-map" component={FileMap} />
            <Route exact path="/basic-sankey" component={BasicSankey} />
            <Route exact path="/sankey-data" component={SankeyWithData} />
            <Route exact path="/basic-funnel" component={BasicFunnel} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
