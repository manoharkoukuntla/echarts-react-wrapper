import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <aside className="menu column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label">Line</p>
      <ul className="menu-list">
        <li>
          <Link to="/line">Simple Line</Link>
        </li>
        <li>
          <Link to="/line-area">Line Area</Link>
        </li>
        <li>
          <Link to="/line-smooth">Line Smooth</Link>
        </li>
        <li>
          <Link to="/stacked-area">Stacked Area</Link>
        </li>
        <li>
          <Link to="/stacked-line">Stacked Line</Link>
        </li>
        <li>
          <Link to="/large-scale-area">Large Scale Area</Link>
        </li>
      </ul>
      <p className="menu-label">Bar</p>
      <ul className="menu-list">
        <li>
          <Link to="/animated-bar">Animated Bar</Link>
          <Link to="/zoom-bar">Zoomable Bar</Link>
          <Link to="/multiple-y">Multiple Y Axis</Link>
        </li>
      </ul>
      <p className="menu-label">Pie</p>
      <ul className="menu-list">
        <li>
          <Link to="/simple-pie">Simple Pie</Link>
        </li>
        <li>
          <Link to="/nightingale-pie">Nightingale Pie Diagram</Link>
        </li>
      </ul>
      <p className="menu-label">Scatter</p>
      <ul className="menu-list">
        <li>
          <Link to="/simple-scatter">Simple Scatter</Link>
        </li>
        <li>
          <Link to="/geo-scatter">Geo Scatter</Link>
        </li>
        <li>
          <Link to="/linear-regression">Linear Regression</Link>
        </li>
        <li>
          <Link to="/world-population">World Population</Link>
        </li>
      </ul>
      <p className="menu-label">Geo</p>
      <ul className="menu-list">
        <li>
          <Link to="/flights">Fight Map</Link>
        </li>
        <li>
          <Link to="/world-population-geo">World Population</Link>
        </li>
      </ul>
      <p className="menu-label">HeatMap</p>
      <ul className="menu-list">
        <li>
          <Link to="/basic-heat-map">Basic Heat Map</Link>
        </li>
        <li>
          <Link to="/piecewise-heat-map">Heat Map Piecewise</Link>
        </li>
        <li>
          <Link to="/selection-heat-map">Heat Map Range Selection</Link>
        </li>
      </ul>
      <p className="menu-label">TreeMap</p>
      <ul className="menu-list">
        <li>
          <Link to="/basic-tree-map">Basic Tree Map</Link>
        </li>
        <li>
          <Link to="/disk-tree-map">File System Tree Map</Link>
        </li>
      </ul>
      <p className="menu-label">Sankey</p>
      <ul className="menu-list">
        <li>
          <Link to="/basic-sankey">Basic Sankey</Link>
        </li>
        <li>
          <Link to="/sankey-data">Sankey From Data</Link>
        </li>
      </ul>
      <p className="menu-label">Funnel</p>
      <ul className="menu-list">
        <li>
          <Link to="/basic-funnel">Basic Funnel</Link>
        </li>
      </ul>
    </aside>
  );
};

export default NavBar;
