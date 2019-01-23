import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import reduxThunk from 'redux-thunk';

import TimeActionCreator from './TimeActionCreator';
import TodoActionCreator from './TodoActionCreator';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import _ from 'lodash';


const composeEnhancers = composeWithDevTools(_.extend(TimeActionCreator, TodoActionCreator));
const TodoStore = createStore(RootReducer, composeEnhancers(
    applyMiddleware(invariant(), reduxThunk)
));


export default TodoStore;