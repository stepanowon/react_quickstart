import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputName from './InputName';
import ContactList from './ContactList';
import { Link } from 'react-router-dom';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="well">
                <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 연락처 앱</div>
                    <div className="col-xs-1">
                        <Link className="btn btn-warning btn-circle" to="/add">
                            <span className="glyphicon glyphicon-plus"></span>
                        </Link>
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
            </div>
        );
    }
}

Search.propTypes = {
    changeName : PropTypes.func.isRequired,
    addContact : PropTypes.func.isRequired,
    deleteContact : PropTypes.func.isRequired,
    searchContact : PropTypes.func.isRequired,

    contacts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};

export default Search;
