import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends Component {
    render() {
        let listitems = this.props.items.map((item)=>{
            return (
                <ListItem key={item.no} no={item.no} name={item.name } />
            )
        })

        return (
            <div>
                <ul>
                    {listitems}
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    items : PropTypes.arrayOf(Object)
};

export default List;