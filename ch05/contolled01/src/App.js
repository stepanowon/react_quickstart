import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = { x:0, y:0 };
  }
  change(e) {
    let newValue = parseInt(e.target.value);
    if (isNaN(newValue)) newValue = 0;
    
    if (e.target.id == "x")
      this.setState({ x: newValue })
    else 
      this.setState({ y: newValue })
  }
  render() {
    return (
      <div className="container">
        X : <input id="x" type="text" value={this.state.x} onChange={this.change.bind(this)}/><br />
        Y : <input id="y" type="text" value={this.state.y} onChange={this.change.bind(this)}/><br />
        결과 : <span>{this.state.x + this.state.y}</span>
      </div>
    )
  }
}

export default App;