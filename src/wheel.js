import React, { Component } from "react";
import "./wheel.css";
import ZingTouch from "zingtouch";

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 0,
      rotationActive: false,
    };
    this.outerDivRef = React.createRef();
    this.innerCircleRef = React.createRef();
  }

  componentDidMount() {
    const region = new ZingTouch.Region(this.outerDivRef.current);

    region.bind(this.outerDivRef.current, "rotate", (e) => {
      const newRotation = this.state.rotation + e.detail.distanceFromLast;

      if (newRotation > 360) {
        this.state.rotation = 0;
      }

      if (!this.state.rotationActive) {
        this.props.onRotationChange(newRotation);

        //console.log(this.state.rotationActive);

        this.setState({ rotation: newRotation });
      }
    });
  }

  handleInnerCircleClick = () => {
    // When the inner circle is clicked, toggle the rotation active state
    this.setState((prevState) => ({
      rotationActive: true,
    }));

    const activeMenuItem = this.props.activeMenuItem;
    //console.log("wheel passing value" + activeMenuItem);
    switch (activeMenuItem) {
      case 0:
        //console.log("Songs");
        this.props.onInnerCircleClick(activeMenuItem);
        break;
      case 1:
        //console.log("Artist");
        this.props.onInnerCircleClick(activeMenuItem);
        break;
      case 2:
        this.props.onInnerCircleClick(activeMenuItem);
        console.log("Album");
        break;
      case 3:
        this.props.onInnerCircleClick(activeMenuItem);
        console.log("Playlist");
        break;
      default:
        break;
    }
  };

  handleOuterCircleClick = () => {
    if (this.state.rotationActive) {
      this.setState((prevState) => ({
        rotationActive: false,
      }));
    }
  };

  handleMenuClick = () => {
    this.props.onInnerCircleClick(-1);
  };

  render() {
    return (
      <div className="wheel">
        <div
          className="outside-rounded-div"
          ref={this.outerDivRef}
          onClick={this.handleOuterCircleClick}
          style={{ touchAction: "none" }}
        >
          <p className="menu">
            <a onClick={this.handleMenuClick}>Menu</a>
          </p>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/20/fast-forward.png"
            alt="fast-forward"
            className="forward"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/rewind.png"
            alt="rewind"
            className="backward"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/external-solid-kawalan-studio/20/000000/external-play-pause-user-interface-solid-kawalan-studio.png"
            alt="play pause"
            className="play-pause"
          />
          {/* <p className='backward'>backward</p> */}
          <div
            className="inside-rounded-div"
            ref={this.innerCircleRef}
            onClick={this.handleInnerCircleClick}
          ></div>
        </div>
      </div>
    );
  }
}

export default Wheel;
