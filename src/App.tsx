import React from 'react';
import logo from './logo.png';
import './App.css';
import FormView from './FormView';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo"/>

      </header>
      <div>
      <FormView></FormView>
      </div>
    </div>
  );
}

export default App;
