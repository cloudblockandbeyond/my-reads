import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BooksGrid extends Component {
    static propTypes = {
        bookGrid: PropTypes.array
    };

    render() {
        const { bookGrid } = this.props;
        
        return (
            <div className="row m-3">
                <div className="col-sm-6">
                    <div className='card-deck'>
                        { bookGrid.map((book) => (
                            <div className="card" key={book.id}>
                                <div className="card-header">
                                    <h6 className="card-title">{ book.title }</h6>
                                </div>
                                <div className="card-body">
                                    <img className="img-fluid img-thumbnail card-img-top" src={ `${book.imageLinks.thumbnail }` } alt={ book.title }></img>
                                </div>
                                <div className="card-footer">
                                    <p className="text-muted">{ book.title }</p>
                                    <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        );
    }
}

export default BooksGrid;