import React, { Component } from 'react';
import './App.css';
import Sample from './Sample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewSample : false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <div>
          { this.state.viewSample ? <Sample /> : "" }
          
        </div>
      </div>
    );
  }
}

export default App;
