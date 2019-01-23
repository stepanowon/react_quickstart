import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MyButton extends PureComponent {

    render() {
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
