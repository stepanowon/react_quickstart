import AddContact from './AddContact';
import ContactActionCreator from '../actions/ContactActionCreator';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch)=> {
    return {
        addContact : (name,tel,address) => dispatch(ContactActionCreator.asyncAddContact(name,tel,address)),
    }
}

const AddContactContainer = connect(null, mapDispatchToProps)(AddContact);
export default AddContactContainer;