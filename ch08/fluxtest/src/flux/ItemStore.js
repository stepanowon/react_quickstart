import { Store } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import Constant from './Constant';
import produce from 'immer';

let itemName = '';
let items = [];

class ItemStore extends Store {
    getState() {
        return {
            itemName :itemName,
            items:items
        }
    }

    __onDispatch(action) {
        switch (action.type) {
            case Constant.ADD_ITEM :
                items = produce(items, (draft)=> { 
                    draft.push(action.payload); 
                })
                this.__emitChange();
                break;
            case Constant.DELETE_ITEM : 
                let index = items.findIndex((item)=> item.id === action.payload.id);
                items = produce(items, (draft)=> { 
                    draft.splice(index,1); 
                });
                this.__emitChange();
                break;
            case Constant.CHANGE_NAME : 
                itemName = action.payload.itemName;
                this.__emitChange();
                break;  
            default : 
                break;
        }
    }
}

export default new ItemStore(AppDispatcher);
