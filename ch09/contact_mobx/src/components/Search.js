import React, { Component } from 'react';

import InputName from './InputName';
import ContactList from './ContactList';
import { Link } from 'react-router-dom';

import { renderRoutes } from 'react-router-config'
import { observer, inject } from 'mobx-react';

@inject('contactStore')
@observer
class Search extends Component {
    render() {
        const { route, contactStore } = this.props;
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
                        <InputName searchContact={contactStore.searchContact} name={contactStore.name}
                            changeName={contactStore.changeName}/>
                    </div>
                </div>
                <ContactList contacts={contactStore.contacts} 
                    deleteContact={contactStore.deleteContact} />
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

export default Search;

