import React, { Component } from 'react';
import CountryItem from './CountryItem'

class CountryList extends Component {
    render() {
        let countries = this.props.countries.map((item, index) => {
            return (
                <CountryItem key={item.no} country={item}/>
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