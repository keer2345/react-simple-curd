import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.any
};

const defaultProps = {
  name: "Default name of App"
};

class MyComponent extends Component {
  componentWillMount() {
    console.log("WILL MOUNT");
  }

  componentDidMount() {
    console.log("DID MOUNT");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props, this.state, nextProps, nextState);
  }

  componentDidUpdate(preProps, preState) {
    console.log(this.props, this.state, preProps, preState);
  }

  shouldComponentUpdate(){
    return true;   // if here is "false", the event of "onClick" will could not update
  }

  render() {
    const { title, name, onClick } = this.props;
    return (
      <div className="component">
        <h2>This is component that is dropped into another component</h2>
        <h3>Title: {title}</h3>
        <h3>Name: {name}</h3>
        <div onClick={onClick}>Click me</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
