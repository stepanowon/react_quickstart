import Constant from './Constant';
import AppDispatcher from './AppDispatcher';

const ItemActions = {
    addItem(itemName) {
        if (itemName.length > 2) {
            let id = new Date().getTime();
            AppDispatcher.dispatch({
                type : Constant.ADD_ITEM,
                payload : { id: id, itemName: itemName }
            })    
        }
    },
    deleteItem(id) {
        AppDispatcher.dispatch({
            type : Constant.DELETE_ITEM,
            payload : { id: id }
        })
    },
    changeName(itemName) {
        AppDispatcher.dispatch({
            type : Constant.CHANGE_NAME,
            payload : { itemName : itemName }
        })
    }
} 

export default ItemActions;