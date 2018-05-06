> https://www.youtube.com/watch?v=S66rHpyU-Eg&t=1503s

# Getting started/install
```
npm i create-react-app -g

create-react-app react-simple-crud
```
# Render and JSX syntax
*App.js*:
```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const title = 'This is myself App';
    const anotherTitle = 'This is another title'; 
    return (
      <div className="App">
        <h1>{ true ? title : anotherTitle }</h1>
      </div>
    );
  }
}

export default App;
```

# Rendering lists
```javascript
class App extends Component {
  render() {
    const title = 'This is myself App';
    const anotherTitle = 'This is another title'; 

    const list = ['item1','item2','Another item'];
    return (
      <div className="App">
        <h1>{ true ? title : anotherTitle }</h1>
          {
            list.map(item => {
              return (
                <li>item</li>
              );
            })
          }
      </div>
    );
  }
}
```

# Event handlers
- `onClick`,`onMouseEnter`,`onKeyDown`,`onChange`,`onSubmit`,`onFocus`...
- Refs
- Constructor and binding methods

```javascript
class App extends Component {

  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick() {
    console.log('Click!');
  }

  onChange(event) {
    console.log(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value)
  }

  render() {
    const title = 'This is myself App';
    const anotherTitle = 'This is another title'; 

    const list = ['item1','item2','Another item'];
    return (
      <div className="App">
        <h1>{ true ? title : anotherTitle }</h1>
        <div>
          {
            list.map(item => {
              return (
                <li onClick={this.onClick}>item</li>
              );
            })
          }
          </div>
          <div>
            <form onSubmit={this.onSubmit}>
              <input onChange={this.onChange} ref={input => {this.input = input}} />
            </form>
          </div>
      </div>
    );
  }
}
```

# State
```javascript
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      title:'App title'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
```

## setState
```javascript
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      title:'App title'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      title:'New title'
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here!</div>
      </div>
    );
  }
}
```

# Creating/importing components
Add file *src/MyComponent.js*:

```javascript
import React, {Component} from 'react';

class MyComponent extends Component {
    render(){
        return(
            <div className="component">
                <h2>This is component that is dropped into another component</h2>
            </div>
        );
    }
}

export default MyComponent;
```


Add coding into *App.js*:
```javascript
import MyComponent from './MyComponent';

//...
render() {
  return (
    <div className="App">
    //...
      <MyComponent/>
    </div>
  );
}
```




## Passing and using props
*src/MyComponent.js*:
```javascript
class MyComponent extends Component {
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
```

*App.js*:
```javascript
//...
render() {
  return (
    <div className="App">
    // ...
      <MyComponent
        title="This component's title"
        name="keer"
        onClick={this.onClick}
      />
    </div>
  );
}
```

## propTypes
```
npm i -S prop-types
```

Edit *src/MyComponent.js*:
```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

class MyComponent extends Component {
    // ...
}

MyComponent.propTypes = propTypes;

export default MyComponent;
```

## defaultProps
```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.any
};

const defaultProps = {
  name: 'Default name of App'
};

class MyComponent extends Component {
    // ...
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps

export default MyComponent;
```

## Updating props
*App.js*:
```javascript
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Initial name",
      title: "Initial title"
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      name: "New app name",
      title: "New title"
    });
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
      </div>
    );
  }
}

export default App;
```

# Lifecycle methods
```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

// ...

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
   // ...
  }
}

// ...

export default MyComponent;
```

# Controlled/uncontrolled inputs
```javascript
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
```

# React Router
```
npm i -S react-route
```
Copy code from [React Training / Router](https://reacttraining.com/react-router/web/example/basic) to *App.js*


22) 32:56 - Simple CRUD app: GET
23) 37:37 - Simple CRUD app: DELETE
24) 44:29 - Simple CRUD app: ADD
25) 49:33 - Simple CRUD app: EDIT﻿
