import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import SearchDisplay from './components/SearchDisplay';

function App() {

  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <SearchForm/>
      <Router>
        <SearchDisplay path='/:category/:id'/>
      </Router>
    </div>
  );
}

export default App;
