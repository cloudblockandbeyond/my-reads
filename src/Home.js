import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

class Home extends Component {
    static propTypes = {
        books: PropTypes.array
    };

    render() {
        const { books } = this.props;
        const currentlyReading = books.filter((book) => (book.shelf === 'currentlyReading'));
        const wantToRead = books.filter((book) => (book.shelf === 'wantToRead'));
        const read = books.filter((book) => (book.shelf === 'read'));

        return (
            <div className="row m-3">
                <div className="col-sm-12">
                    <ul className="nav nav-tabs" id="booksTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="currentlyReading-tab" data-toggle="tab" href="#currentlyReading" role="tab">
                                <div className="text-dark font-weight-bolder">Currently Reading</div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="wantToRead-tab" data-toggle="tab" href="#wantToRead" role="tab">
                                <div className="text-dark font-weight-bolder">Want to Read</div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="read-tab" data-toggle="tab" href="#read" role="tab">
                            <div className="text-dark font-weight-bolder">Read</div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="booksTabContent">
                        <div className="tab-pane fade show active" id="currentlyReading" role="tabpanel">
                            <BooksGrid bookGrid={ currentlyReading }/>
                        </div>
                        <div className="tab-pane fade" id="wantToRead" role="tabpanel">
                            <BooksGrid bookGrid={ wantToRead }/>
                        </div>
                        <div className="tab-pane fade" id="read" role="tabpanel">
                            <BooksGrid bookGrid={ read }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;