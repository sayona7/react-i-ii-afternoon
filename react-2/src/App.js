import React, {Component} from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import data from "./data";
import Buttons from "./Components/Buttons/Buttons";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: data,
      view: 0
    }
  }

  previousPage = () => {

    if (this.state.view === 0) {
        this.setState({
            view: this.state.data.length - 1
        });
      } else {
        this.setState({
            view: this.state.view - 1
        });
      }
  }

  nextPage = () => {
    
    if (this.state.view === this.state.data.length - 1) {
          this.setState({
              view: 0
          });
      } else {
          this.setState({
              view: this.state.view + 1
          });
      }
    
  }

  render() {
    const {users, view} = this.state;
    const curUser = users[view - 1];

    return (
      <div className='app-div' >

        <div className='header'>
          <h2 className='home'>Home</h2>
        </div>

        <div className='body'>
            <Card person={this.state.users[this.state.view]} count={users.length} index={view} />

            <Buttons previous={this.previousPage} next={this.nextPage} />
        </div>

      </div>
      
    )
  }

}

export default App;
