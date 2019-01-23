import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state)=> {
    return {
        isLoading: state.isLoading,
    }
}

const LoadingContainer = connect(mapStateToProps, null)(Loading);

export default LoadingContainer;