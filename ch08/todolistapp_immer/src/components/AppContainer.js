import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import TimeActionCreator from '../redux/TimeActionCreator';
import { connect } from 'react-redux';

const stateProps = (state)=> {
  return {
    todolist : state.todolist,
    currentTime : state.currentTime
  }
}

const dispatchProps = (dispatch)=> {
  return {
    addTodo : (todo)=>dispatch(TodoActionCreator.addTodo(todo)),
    deleteTodo : (no)=>dispatch(TodoActionCreator.deleteTodo(no)),
    toggleDone : (no)=>dispatch(TodoActionCreator.toggleDone(no)),
    changeTime : ()=>dispatch(TimeActionCreator.asyncChangeTime())
  }
}

const AppContainer = connect(stateProps, dispatchProps)(App);
export default AppContainer;