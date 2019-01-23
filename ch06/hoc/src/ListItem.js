import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logger from './Logger';

class ListItem extends Component {
    
    render() {
        return (
            <li className="list-group-item list-group-item-success">
                {this.props.no} : {this.props.item}
            </li>
        )
    }
}

ListItem.propTypes = {
    no : PropTypes.number.isRequired,
    item : PropTypes.string.isRequired
};

export default Logger(ListItem);
