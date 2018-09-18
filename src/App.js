import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Line from "./components/Line";
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
class App extends Component {
  render() {
    return (
      <div className="App main-content columns is-fullheight">
        <NavBar />
        <div className="container column is-9">
          <Switch>
            <Route exact path={["/", "/line"]} component={SimpleLine} />
            <Route exact path="/line-area" component={LineArea} />
            <Route exact path="/line-smooth" component={SmoothLine} />
            <Route exact path="/stacked-area" component={StackedArea} />
            <Route exact path="/stacked-line" component={StackedLine} />
            <Route exact path="/large-scale-area" component={LargeScaleArea} />
            <Route exact path="/animated-bar" component={AnimatedBar} />
            <Route exact path="/zoom-bar" component={ZoomableData} />
            <Route exact path="/multiple-y" component={MultipleYaxis} />
            <Route exact path="/simple-pie" component={SimplePie} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
