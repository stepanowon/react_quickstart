import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    
    render() {
        console.log("### MyButton 컴포넌트 렌더")
        return (
            <button className="btn btn-default" onClick={() => this.props.addItem() }>
                Add Item!!
            </button>  
        )
    }
}

MyButton.propTypes = {
    addItem: PropTypes.func.isRequired
};

export default MyButton;
