import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Logger from './Logger';

class List extends Component {

    render() {
        let items = this.props.itemlist.map((item) => {
            return (<ListItem isLog="true" key={item.no} {...item} />)
        });
    
        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }
}

List.propTypes = {
    itemlist : PropTypes.arrayOf(PropTypes.object)
};

export default Logger(List);
