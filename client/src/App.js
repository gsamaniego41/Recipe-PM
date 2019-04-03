import React, {Component} from "react";
import axios from "axios";

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
