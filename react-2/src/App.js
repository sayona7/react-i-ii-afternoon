import React, {Component} from 'react';
import './App.css';
import Card from "./Components/Card/Card";

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {

    return (
      <div>
        <div>App</div>
        <Card />
      </div>
      
    )
  }

}

export default App;
