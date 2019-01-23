import constants from '../Constants';
import update from 'react-addons-update';

const initialState = {
    list : []
}
const todoReducer = (state = initialState, action) => {
    console.log("### red : ");
    console.log(action);
    switch (action.type) {
        case constants.ADD_ITEM : 
        let ret1 = { 
            list : update(state.list, 
                { $push:[action.data] }) 
        };
        return ret1;
    case constants.REMOVE_ITEM:
        let ret2 = { 
            list : update(state.list, 
                { $splice: [[action.data, 1 ]] })
        };
        return ret2;
    default:
        return state;
    }
};
export default todoReducer;

