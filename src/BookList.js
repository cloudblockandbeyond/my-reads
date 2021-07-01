import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired, 
        id: PropTypes.string.isRequired, 
        updateShelf: PropTypes.func.isRequired
    };

    handleUpdateShelf = (book) => {
        this.props.updateShelf(book)
    }

    render() {
        const { id, books } = this.props;
        
        return (
            <div>
                <div className="tab-pane fade show active" id={ id } role="tabpanel">
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            { books.map((book, index) => (
                                <Book key={ index } book={ book } updateShelf={ this.handleUpdateShelf }/>
                            )) }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookList;
