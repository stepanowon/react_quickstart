import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import { connect } from 'react-redux';

const mapState = (state)=> {
    return {
        todolist : state.todolist
    }   
}

const mapDispatch = (dispatch)=> {
    return {
        addTodo : (todo)=> dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo : (no)=> dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone : (no)=> dispatch(TodoActionCreator.toggleDone(no)),
    }
}

const AppContainer = connect(mapState, mapDispatch)(App);
export default AppContainer;