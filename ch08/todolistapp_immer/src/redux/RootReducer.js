import { combineReducers } from 'redux';
import TimeReducer from './TimeReducer';
import TodoReducer from './TodoReducer';

const RootReducer = combineReducers({
  currentTime : TimeReducer,
  todolist : TodoReducer
})

export default RootReducer;