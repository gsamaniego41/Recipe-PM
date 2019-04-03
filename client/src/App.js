import React, {Component} from "react";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";

import "axios-progress-bar/dist/nprogress.css";

class App extends Component {
  state = {
    dishes: []
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/dishes")
      .then(res => this.setState({dishes: res.data}))
      .catch(err => console.log(err.msg));
  };

  render() {
    if (!this.state.dishes.length) {
      loadProgressBar({showSpinner: false, color: "red"});
    }

    return (
      <div>
        <h1>Recipe Book</h1>
        {this.state.dishes.map(dish => (
          <h2>{dish.name}</h2>
        ))}
      </div>
    );
  }
}

export default App;
