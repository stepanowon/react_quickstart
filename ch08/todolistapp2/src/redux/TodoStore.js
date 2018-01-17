import { createStore } from 'redux';
import RootReducer from './RootReducer';

const TodoStore = createStore(RootReducer);
export default TodoStore;