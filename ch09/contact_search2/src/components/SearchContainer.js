import Search from './Search';
import ContactActionCreator from '../actions/ContactActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        contacts: state.contacts,
        isLoading: state.isLoading,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        changeName : (name) => dispatch(ContactActionCreator.changeName(name)),
        deleteContact : (no) => dispatch(ContactActionCreator.asyncDeleteContact(no)),
        searchContact : () => dispatch(ContactActionCreator.asyncSearchContact()),
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;