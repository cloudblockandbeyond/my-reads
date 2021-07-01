import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';
import PropTypes from 'prop-types';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired, 
        updateShelf: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            query: "", 
            searchBooks: []
        };
    }

    updateQuery = (query) => {
        this.setState((currentState) => ({
            query: query
        }));

        this.handleSearch(query);
    }

    handleUpdateShelf = (book) => {
        this.props.updateShelf(book)
    }

    handleSearch = (query) => {
        if(query.length > 0) {
          BooksAPI.search(query).then((books) => {
              if(books.error) {
                  this.setState((currentState) => ({
                      searchBooks: []
                  }));
              } else {
                  const updatedBooks = this.updateSearchBookHelf(books);
                  this.setState((currentState) => ( {
                      searchBooks: updatedBooks
                  } ));
              }
          });
        } else {
            this.setState((currentState) => ({
                searchBooks: []
            }));
        }
    };

    updateSearchBookHelf = (books) => {
        const updatedBooks = books.map((book) => {
            const existingBook = this.props.books.filter((b) => (b.id === book.id));
            ( existingBook.length > 0 ) && ( book.shelf = existingBook[0].shelf );
            return book;
        });

        return updatedBooks;
    };

    render() {
        return (
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend" style={ { height:38 } }>
                        <span className="input-group-text">
                            <div className="close-search">
                                <Link className="close-search" to={ { pathname: "/" }}>Close</Link>
                            </div>
                        </span>
                    </div>
                    <input type="text" className="form-control text-center" placeholder="Search by title or author"
                        name="" value={ this.state.query }
                        onChange={(event) => {this.updateQuery(event.target.value)}} >
                    </input>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { this.state.searchBooks.map( (book, index) => (
                            <Book key={ index } book={ book } updateShelf={ this.handleUpdateShelf }/>
                        ) )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;