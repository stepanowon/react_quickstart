import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        todolist : state.todolist
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        addTodo : (todo) => dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo : (no) => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone : (no) => dispatch(TodoActionCreator.toggleDone(no))
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;