import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
