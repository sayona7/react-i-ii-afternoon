import React, {Component} from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import data from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: data,
      view: 1
    }
  }

  previousPage = () => {
    let view = this.state.view
    if (view === 1) {
      let lastUser = this.state.users.length
      this.setState({
        view: lastUser
      })
    }
    else {
      this.setState({
        view: view - 1
      })
    }
  }

  nextPage = () => {
    let view = this.state.view
    const lastUser = this.state.users.length
    if (view === lastUser) {
      this.setState({
        view: 1
      })
    } else {
      this.setState({
        view: view + 1
      })
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
          <div className='card'>
            <Card person={curUser} count={users.length} index={view} />
          </div>

        </div>

      </div>
      
    )
  }

}

export default App;
