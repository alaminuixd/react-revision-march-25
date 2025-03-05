import React, { Component } from "react";

class App extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true, // Default to dark mode
    };
  }

  // Toggle dark mode state
  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode, // Toggle the state
    }));
  };

  render() {
    // Destructure state values for easier access
    const { isDarkMode } = this.state;
    console.log("Rerendering");

    return (
      <div
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <h1>Dark Mode: {isDarkMode ? "On" : "Off"}</h1>
        <button onClick={this.toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    );
  }
}

export default App;
