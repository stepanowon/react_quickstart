import React, { Component } from 'react';
import styles from './styles';

class CountryItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.country !== this.props.country;
    }
    
    render() {
        return (
            <li style={styles.listItemStyle}
              className={this.props.visited ? 'list-group-item active' : 'list-group-item' }>
                    {this.props.country}
            </li>
        );
    }
}

export default CountryItem;