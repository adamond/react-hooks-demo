import React from 'react';
import './App.css';
import CustomHooks from './CustomHooks';
import Hooks from './Hooks';
import NoHooks from './NoHooks';

function App() {
  return (
    <div className="App">
      <NoHooks />
      <hr />
      <Hooks />
      <hr />
      <CustomHooks />
    </div>
  );
}

export default App;
