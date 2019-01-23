import Constant from '../Constant';
import update from 'immutability-helper';

const initialState = {
    contacts : [], isLoading: false, name:''
}

let changeIsLoading = (state, isLoading) => {
    let newState = update(state, { 
        isLoading: { $set:isLoading }
    })
    return newState;
}

const ContactReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        case Constant.SEARCH_REQUEST:
            newState = update(state, { 
                contacts: { $set: [] }, 
                name: { $set : action.payload.name }
            });
            return changeIsLoading(newState, true);
        case Constant.SEARCH_SUCCESS:
            newState = update(state, { 
                contacts: { $set: action.payload.contacts }
            });
            return changeIsLoading(newState, false);
        case Constant.SEARCH_FAIL:
            return changeIsLoading(state, false);
        case Constant.CHANGE_ISLOADING:
            return changeIsLoading(state, action.payload.isLoading);
        case Constant.CHANGE_NAME:
            return update(state, { 
                name: { $set : action.payload.name }
            })
        // case Constant.CHANGE_SHOW_ADD_CONTACT:
        //     return update(state, { 
        //         showAddContact: { $set : action.payload.showAddContact }
        //     })
        default:
            return state;
    }
}

export default ContactReducer;

