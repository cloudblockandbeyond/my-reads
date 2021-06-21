import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import * as BooksAPI from './utils/BooksAPI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState((currentState) => ({
        books: books
      }));
    });
  }

  render() {
    return (
      <div>
        <Route path="/" render={ () => (
          <Navigation />
        ) } />
        <div className="container-fluid">
            <Route exact path="/" render={ () => (
              <Home books={ this.state.books }/>
            ) }/>
        </div>
      </div>
    );
  }
}

export default App;