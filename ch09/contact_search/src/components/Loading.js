import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
    render() {
        if (this.props.isLoading) {
            return (
                <div className="modal">
                    <div className="form loading ">
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return '';
        }
    }
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

Loading.defaultProps = {
    isLoading:false
}

export default Loading;