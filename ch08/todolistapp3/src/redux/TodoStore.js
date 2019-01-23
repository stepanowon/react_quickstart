import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import reduxThunk from 'redux-thunk';

const logger = (store) => {
    return (next) => {
        return (action) => {
            if (typeof(action) !== 'undefined') {
                console.log("### action 실행 : ", 
                    new Date().toLocaleTimeString(), JSON.stringify(action))
            }
            return next(action);
        }
    }
}

const TodoStore = createStore(RootReducer, applyMiddleware(logger,reduxThunk));
export default TodoStore;