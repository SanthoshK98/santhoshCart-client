import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from './Router';
import { NavBar } from './components/NavBar';
import BucketTest from './components/BucketTest';

function App() {
  return (
    <div className="App">
      {/* <BucketTest/> */}
      <NavBar/>
      <Router/>
    </div>
  );
}

export default App;
