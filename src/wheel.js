import React, { Component } from "react";
import "./wheel.css";
import ZingTouch from "zingtouch";

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 0,
    };
    this.prevAngle = null;
    this.innerCircleRadius = 50;
    this.oncliked = false;
    this.outerDivRef = React.createRef();
  }

  componentDidMount() {
    const region = new ZingTouch.Region(this.outerDivRef.current);

    region.bind(this.outerDivRef.current, "rotate", (e) => {
      const newRotation = this.state.rotation + e.detail.distanceFromLast;

      this.props.onRotationChange(newRotation);

      console.log("Rotation Angle:", newRotation);

      this.setState({ rotation: newRotation });
    });
  }

  render() {
    return (
      <div className="wheel">
        <div
          className="outside-rounded-div"
          ref={this.outerDivRef}
          style={{ touchAction: "none" }}
        >
          <p className="menu">Menu</p>
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
            onClick={this.handleInnerCircleClick}
          ></div>
        </div>
      </div>
    );
  }
}

export default Wheel;
