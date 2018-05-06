import React, { Component } from "react";
import MyComponent from "./MyComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Initial name",
      title: "Initial title",
      checked: true
    };

    this.onClick = this.onClick.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  onClick() {
    this.setState({
      name: "New app name",
      title: "New title"
    });
  }

  updateCheck() {
    this.setState({
      checked: !this.state.checked
    });
    console.log(this.state.checked);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here!</div>
        <MyComponent
          title={this.state.title}
          name={this.state.name}
          onClick={this.onClick}
        />

        <input
          type="checkbox"
          onChange={this.updateCheck}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default App;
