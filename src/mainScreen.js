import React, { Component } from "react";
import "./screen.css";
import Wheel from "./wheel";
import Songs from "./song";
import AlbumScreen from "./albumScreen";
import ArtistScreen from "./artistScreen";
import PlaylistScreen from "./playlistScreen";

class Screen extends Component {
  constructor() {
    super();
    this.state = {
      activeMenuItem: 0,
      showScreen: -1,
    };
  }

  handleRotationChange = (newRotation) => {
    //console.log(newRotation);
    const menuItemsCount = 4;
    const anglePerMenuItem = 360 / menuItemsCount;
    let activeMenuItem = Math.floor(newRotation / anglePerMenuItem);

    if (activeMenuItem < 0) {
      activeMenuItem = menuItemsCount - 1;
    }

    this.setState({ activeMenuItem });
  };

  handleInnerCircleClick = (innerCirclecliked) => {
    //console.log("innercirecle: " + innerCirclecliked);

    switch (innerCirclecliked) {
      case 0:
        console.log("Songs");
        this.setState({
          showScreen: 0,
        });
        break;
      case 1:
        //console.log("Artist");
        this.setState({
          showScreen: 1,
        });
        break;
      case 2:
        this.setState({
          showScreen: 2,
        });
        //console.log("Album");
        break;
      case 3:
        this.setState({
          showScreen: 3,
        });
        //console.log("Playlist");
        break;
      default:
        this.setState({
          showScreen: -1,
        });
        break;
    }
  };

  render() {
    const menuItems = ["Songs", "Artist", "Album", "Playlist"];
    const { activeMenuItem, showScreen } = this.state;
    //console.log(showScreen);

    return (
      <div className="main-screen">
        {showScreen === 0 ? (
          <Songs />
        ) : showScreen === 1 ? (
          <ArtistScreen />
        ) : showScreen === 2 ? (
          <AlbumScreen />
        ) : showScreen === 3 ? (
          <PlaylistScreen />
        ) : (
          <>
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
          </>
        )}
        {/* <h4>Ipod.js</h4>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={index === activeMenuItem ? "active" : ""}
            >
              <button>{item}</button>
            </li>
          ))}
        </ul> */}
        <Wheel
          onRotationChange={this.handleRotationChange}
          onInnerCircleClick={this.handleInnerCircleClick}
          activeMenuItem={activeMenuItem}
        />
      </div>
    );
  }
}

export default Screen;
