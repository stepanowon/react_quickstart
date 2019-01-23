import Constant from '../Constant';
import produce from 'immer';

const initialState = {
  todolist : [
    { no:1, todo:"React 학습", done:false },
    { no:2, todo:"Redux 학습", done:false },
    { no:3, todo:"Bootstrap 살펴보기", done:true }
  ]
}

const TodoReducer = (todolist=initialState.todolist, action)=> {
  let index, newTodolist, newTodo;
  switch(action.type) {
    case Constant.ADD_TODO :
      newTodo = { no: action.payload.no, 
        todo:action.payload.todo, done:false};
      newTodolist = produce(todolist, (draft)=> {
        draft.push(newTodo);
      })
      return newTodolist;
    case Constant.DELETE_TODO :
      index = todolist.findIndex((item)=>item.no === action.payload.no);
      newTodolist = produce(todolist, (draft)=> {
        draft.splice(index, 1);
      })
      return newTodolist;
    case Constant.TOGGLE_DONE :
      index = todolist.findIndex((item)=>item.no === action.payload.no);
      newTodolist = produce(todolist, (draft)=> {
        draft[index].done = !draft[index].done;
      })
      return newTodolist;
    default : 
      return todolist;
  }
}

export default TodoReducer;