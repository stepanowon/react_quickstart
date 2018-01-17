import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import AddContact from './AddContact';
import Loading from './Loading';
import { Portal } from 'react-portal';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
            <div className="container">
                <Route  path="/" render={(props2)=><Search {...props2} {...this.props} /> } />
                <Route  path="/add" render={(props2)=><AddContact {...props2} {...this.props} /> } />
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading isLoading={this.props.isLoading}>
                        <div className="well title"><h4>데이터 처리중</h4></div>
                    </Loading>    
                </Portal>
            </div>
            </Router>
        );
    }
}

App.propTypes = {
    changeName : PropTypes.func.isRequired,
    addContact : PropTypes.func.isRequired,
    deleteContact : PropTypes.func.isRequired,
    searchContact : PropTypes.func.isRequired,

    contacts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default App;
