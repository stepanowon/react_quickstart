import { createStore } from 'redux';
import TodoReducer from './TodoReducer';

const TodoStore = createStore(TodoReducer);
export default TodoStore;