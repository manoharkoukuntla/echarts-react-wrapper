import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <aside class="menu column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p class="menu-label">Line</p>
      <ul class="menu-list">
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
      <p class="menu-label">Bar</p>
      <ul class="menu-list">
        <li >
            <Link to="/animated-bar">Animated Bar</Link>
            <Link to="/zoom-bar">Zoomable Bar</Link>
            <Link to="/multiple-y">Multiple Y Axis</Link>
        </li>
      </ul>
      <p class="menu-label">Pie</p>
      <ul class="menu-list">
        <li >
            <Link to="/simple-pie">Simple Pie</Link>
           
        </li>
      </ul>
    </aside>
  );
};

export default NavBar;
