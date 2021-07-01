import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import BookList from './BookList';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        activeShelf: "currentlyReading"
    };

    static propTypes = {
        books: PropTypes.array.isRequired, 
        shelves: PropTypes.array.isRequired, 
        updateShelf: PropTypes.func.isRequired
    };

    getBooksByShelf = (id) => {
        const { books } = this.props;
        return books.filter((book) => (book.shelf === id));
    };

    handleUpdateShelf = (book) => {
        this.props.updateShelf(book)
    }

    handleUpdateActiveShelf = (id) => {
        this.setState((currentState) => ({
            activeShelf: id
        }));
    }

    render() {
        const { shelves } = this.props;

        return (
            <div className="row m-3">
                <div className="col-sm-12">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        { shelves.filter((shelf) => (shelf.id !== "none")).map((shelf, index) => (
                            <Shelf key={ index } shelf={ shelf } activeShelf={ this.state.activeShelf } 
                                onUpdateActiveShelf={ this.handleUpdateActiveShelf } />
                        )) }
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <BookList id={ this.state.activeShelf } books={ this.getBooksByShelf(this.state.activeShelf) } 
                            updateShelf={ this.handleUpdateShelf }/>
                    </div>
                    <div className="open-search">
                        <Link to={ { pathname: "/search" }}>Add a book</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
