import React, { Component } from "react";
import "./screen.css";
import Wheel from "./wheel";

class Screen extends Component {
  constructor() {
    super();
    this.state = {
      activeMenuItem: 0,
    };
  }

  handleRotationChange = (newRotation) => {
    console.log(newRotation);
    const menuItemsCount = 4;
    const anglePerMenuItem = 360 / menuItemsCount;
    let activeMenuItem = Math.floor(newRotation / anglePerMenuItem);

    if (activeMenuItem < 0) {
      activeMenuItem = menuItemsCount - 1;
    }

    this.setState({ activeMenuItem });
  };

  render() {
    const menuItems = ["Songs", "Artist", "Album", "Playlist"];
    const { activeMenuItem } = this.state;

    return (
      <div className="main-screen">
        <h4>Ipod.js</h4>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={index === activeMenuItem ? "active" : ""}
            >
              <button>{item}</button>
            </li>
          ))}
        </ul>
        <Wheel onRotationChange={this.handleRotationChange} />
      </div>
    );
  }
}

export default Screen;
