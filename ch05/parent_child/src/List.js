import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends Component {
    componentWillMount() {
        console.log("#### Will Mount");
    }

    componentDidMount() {
        console.log("#### Did Mount");
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log("### will update")
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("#### Did Update");
    }

    render() {
        console.log("###render")
        let items = this.props.itemlist.map((item) => {
            return (<ListItem key={item.no} {...item} />)
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

export default List;
