import constants from '../Constants';

const todoActionCreators = {
    addItem(item) {
        return {
            type: constants.ADD_ITEM,
            data : item
        };
    },
    removeItem(index) {
        return {
            type: constants.REMOVE_ITEM,
            data : index
        };
    }
}
export default todoActionCreators;