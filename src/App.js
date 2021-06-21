import React, { Component } from 'react';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" render={ () => (
          <Navigation />
        ) } />
        <div className="container">
            
        </div>
      </div>
    );
  }
}

export default App;