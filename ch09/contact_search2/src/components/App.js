import React, { Component } from 'react';

// import InputName from './InputName';
// import ContactList from './ContactList';
// import Search from './Search';
// import AddContact from './AddContact';
import Loading from './Loading';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';
import routes from '../routes';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    { renderRoutes(routes) }
                    <Portal node={document && document.getElementById('modal-area')}>
                        <Loading isLoading={this.props.isLoading}>
                            <div className="well title">
                                <h4>데이터 처리중</h4>
                            </div>
                        </Loading>    
                    </Portal>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    //changeShowAddContact : PropTypes.func.isRequired,
    changeName : PropTypes.func.isRequired,
    addContact : PropTypes.func.isRequired,
    deleteContact : PropTypes.func.isRequired,
    searchContact : PropTypes.func.isRequired,

    contacts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    //showAddContact: PropTypes.bool.isRequired
}

export default App;