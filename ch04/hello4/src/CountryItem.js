import React, { Component } from 'react';

class CountryItem extends Component {
    render() {
        return (
            <li className={this.props.visited ? 'list-group-item active' : 'list-group-item' }>
                    {this.props.country}
            </li>
        );
    }
}

export default CountryItem;