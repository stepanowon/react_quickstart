import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListItem extends PureComponent {
    
    render() {
        console.log("### ListItem 컴포넌트 렌더")
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

export default ListItem;
