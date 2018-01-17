import React, { Component } from 'react';

import InputName from './InputName';
import ContactList from './ContactList';
import AddContact from './AddContact';
import Loading from './Loading';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 연락처 앱</div>
                    <div className="col-xs-1">
                        <button className="btn btn-warning btn-circle" onClick={()=>this.props.changeShowAddContact(true)}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputName searchContact={this.props.searchContact} name={this.props.name}
                            changeName={this.props.changeName}/>
                    </div>
                </div>
                <ContactList contacts={this.props.contacts} 
                    deleteContact={this.props.deleteContact} />
                { 
                    this.props.showAddContact 
                        ? <AddContact addContact={this.props.addContact} 
                            changeShowAddContact={this.props.changeShowAddContact} /> 
                        : '' 
                }
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading isLoading={this.props.isLoading}>
                        <div className="well title">
                            <h4>데이터 처리중</h4>
                        </div>
                    </Loading>    
                </Portal>
            </div>
        );
    }
}

App.propTypes = {
    changeShowAddContact : PropTypes.func.isRequired,
    changeName : PropTypes.func.isRequired,
    addContact : PropTypes.func.isRequired,
    deleteContact : PropTypes.func.isRequired,
    searchContact : PropTypes.func.isRequired,

    contacts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    showAddContact: PropTypes.bool.isRequired
}

export default App;