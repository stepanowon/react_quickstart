import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

import TimeActionCreator from './TimeActionCreator';
import TodoActionCreator from './TodoActionCreator';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';

const composeEnhancers = 
  composeWithDevTools({ ...TimeActionCreator, ...TodoActionCreator });

const TodoStore = createStore(RootReducer, 
  composeEnhancers(applyMiddleware(invariant(), thunk))
);
export default TodoStore;