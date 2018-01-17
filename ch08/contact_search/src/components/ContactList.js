import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

class ContactList extends Component {
    render() {
        let contacts = this.props.contacts.map((item)=> {
            return <ContactItem key={item.no} {...item} deleteContact={this.props.deleteContact} />
        })

        return (
            <div>
                <ul className="list-group" id="contact-list">
                    {contacts}
                </ul>
            </div>
        );
    }
}

ContactList.propTypes = {
    contacts : PropTypes.arrayOf(PropTypes.object),
    deleteContact : PropTypes.func.isRequired
    
}

export default ContactList;