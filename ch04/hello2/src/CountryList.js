import React, { Component } from 'react';

class CountryList extends Component {
    render() {
        let countries = this.props.countries.map((item, index) => {
            return (
                <li key={item.no} 
                    className={item.visited ? 'list-group-item active' : 'list-group-item' }>
                    {item.country}
                </li>
            )
        })
        
        return (
            <ul className="list-group">
                {countries}
            </ul>
        );
    }
}

export default CountryList;