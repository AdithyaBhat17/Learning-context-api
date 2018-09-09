import React, { Component } from 'react';
import './App.css';

const Context = React.createContext();

const Parent = () => {
  return (
    <div>
    <h2>Child :</h2>
    <Child/>
    </div>
  )
}

const Child = () => {
  return (
    <div>
    <h3>Grandchild :</h3>
    <Grandchild/>
    </div>
  )
}

const Grandchild = ({name}) => {
  return (
    <Context.Consumer>
      {(name) => 
        <div>
          Name : {name}
        </div>
      }
    </Context.Consumer>    
  )
}

class App extends Component {
  render() {
    const name = "Adithya"
    return (
      <div className="App">
        <h1>Parent :</h1>
        <Context.Provider value={name}>
          <Parent name={name}/>
        </Context.Provider>
      </div>
    );
  }
}

export default App

