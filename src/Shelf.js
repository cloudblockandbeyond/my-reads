import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shelf extends Component {
    static propTypes = {
        shelf: PropTypes.object.isRequired, 
        activeShelf: PropTypes.string.isRequired, 
        onUpdateActiveShelf: PropTypes.func.isRequired
    };

    handleClick = (id) => {
        this.props.onUpdateActiveShelf(id);
    };

    render() {
        const { shelf, activeShelf } = this.props;

        return(
            <div>
                <li className="nav-item" role="presentation">
                    <a className={ shelf.id === activeShelf ? "nav-link active" : "nav-link" } 
                        id={ `${shelf.id}-tab` } data-toggle="tab" href={ `#${shelf.id}` } role="tab"
                        onClick={ (event) => { this.handleClick(shelf.id) } } >
                        <h5 className="text-dark font-weight-bolder">
                            { shelf.name }
                        </h5>
                    </a>
                </li>
            </div>
        );
    }
}

export default Shelf;
