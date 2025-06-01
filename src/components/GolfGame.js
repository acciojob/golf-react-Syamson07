import React, { Component } from "react";

class GolfGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ballVisible: false,
      ballPosition: 0,
    };

    // Bind methods here
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({ ballVisible: true });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39 && this.state.ballVisible) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  renderChoice() {
    if (!this.state.ballVisible) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "green",
            position: "relative",
            left: `${this.state.ballPosition}px`,
            transition: "left 0.1s ease",
          }}
        ></div>
      );
    }
  }

  render() {
    return <div>{this.renderChoice()}</div>;
  }
}

export default GolfGame;
