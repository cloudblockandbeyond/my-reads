import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired, 
        updateShelf: PropTypes.func
    };

    handleChange = (book, newShelf) => {
        book.shelf = newShelf
        this.props.updateShelf(book);
    }

    render() {
        const { book } = this.props;

        book.title = book.title ? book.title : 'NoTitle';
        book.shelf = book.shelf ? book.shelf: "none";
        
        const bookImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "NoImage";


        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={ { width: 130, height: 200, backgroundImage: `url(${ bookImage })` } }></div>
                        <div className="book-shelf-changer">
                            <select value={ book.shelf } onChange={ (event) => { this.handleChange(book, event.target.value) } } >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ book.title  }</div>
                    <div className="book-authors">
                        { (book.authors) && ( book.authors.map( (author, index) => (
                            <p key={ index } className="">
                                { author }
                            </p>
                        ) ) ) }
                    </div>
                </div>
            </li>
        );
    }
}

export default Book;
