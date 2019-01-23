import { createStore } from 'redux';
import todoReducer from '../reducers/TodoReducer';

const todoStore = createStore(todoReducer);
export default todoStore;