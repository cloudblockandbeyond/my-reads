import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Search from './Search';
import * as BooksAPI from './utils/BooksAPI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [], 
      shelves: [
        { id: "none", name: "None" }, 
        { id: "currentlyReading", name: "Currently Reading" }, 
        { id: "wantToRead", name: "Want To Read" }, 
        { id: "read", name: "Read" }
      ]
    };
  }

  componentDidMount() {
    this.getCurrentBooks();
  }

  getCurrentBooks = () => {
    BooksAPI.getAll().then((books) => { 
      this.setState((currentState) => ({ 
        books: books
      }));
    });
  }

  handleUpdateShelf = (book) => {
    BooksAPI.update(book, book.shelf).then((updatedBook) => {
      this.getCurrentBooks();
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <Route exact path="/" render={ () => (
            <Home books={ this.state.books } shelves={ this.state.shelves } updateShelf={ this.handleUpdateShelf }/>
          ) }/>
          <Route exact path="/search" render={ () => (
            <Search books={ this.state.books } updateShelf={ this.handleUpdateShelf }/>
          ) }/>
        </div>
      </div>
    );
  }
}

export default App;
