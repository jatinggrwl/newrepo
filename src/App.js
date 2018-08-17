import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from'./Person/Person.js';



class App extends Component {

  state ={
    name:"Jatin"
  }


  switchHandler=()=>
  {
   this.setState(this.state={name:"hero"});
  }


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchHandler}>clickme</button>
        <Person name={this.state.name}/>
        </div>
    );
  }
}

export default App;
