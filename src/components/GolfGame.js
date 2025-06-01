import React, { Component } from "react";

class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      ballPosition: 0, // position in pixels from the left
    };
  }

  componentDidMount() {
    // Add event listener for keydown to detect Right Arrow key press
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up event listener when component unmounts
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    // keyCode 39 is Right Arrow key
    if (event.keyCode === 39 && this.state.gameStarted) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ gameStarted: true });
  };

  renderChoice() {
    if (!this.state.gameStarted) {
      // Show Start button initially
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      // Show the golf ball when game started
      return (
        <div
          className="ball"
          style={{
            position: "relative",
            left: `${this.state.ballPosition}px`,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "2px solid black",
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
