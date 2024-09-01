import React from "react";
import "./style.css";

function August30() {
  return (
    <div className="navBar">
      <ul className="menu">
        <li>
          <button className="menu-button">Home</button>
        </li>
        <li className="dropdown">
          <button className="menu-button">Blog</button>
          <ul className="submenu">
            <li>
              <button className="submenu-button">Design</button>
            </li>
            <li>
              <button className="submenu-button">HTML</button>
            </li>
            <li>
              <button className="submenu-button">CSS</button>
            </li>
            <li>
              <button className="submenu-button">JavaScript</button>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <button className="menu-button">Work</button>
          <ul className="submenu">
            <li>
              <button className="submenu-button">Project 1</button>
            </li>
            <li>
              <button className="submenu-button">Project 2</button>
            </li>
          </ul>
        </li>
        <li>
          <button className="menu-button">About</button>
        </li>
      </ul>
    </div>
  );
}

export default August30;
