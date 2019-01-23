import Constant from '../Constant';
import update from 'immutability-helper';

const initialState = {
    todolist : [
        { no:1, todo:"React 학습", done:false },
        { no:2, todo:"Redux 학습", done:false },
        { no:3, todo:"Bootstrap 살펴보기", done:true }
    ]
}

const TodoReducer = (todolist=initialState.todolist, action) => {
    let index, newTodo, newTodolist, changedDone;
    switch(action.type) {
        case Constant.ADD_TODO:
            newTodo = { no: new Date().getTime(), todo:action.payload.todo, done:false };
            newTodolist = update(todolist, 
                { $push : [ newTodo ] }
            )
            return newTodolist;
        case Constant.DELETE_TODO:
            index = todolist.findIndex((todo) => todo.no === action.payload.no)
            newTodolist = update(todolist, 
                { 
                    $splice: [[ index, 1 ]] 
                }
            )
            return newTodolist;
        case Constant.TOGGLE_DONE:
            index = todolist.findIndex((todo) => todo.no === action.payload.no)
            changedDone = !todolist[index].done;
            newTodolist = update(todolist, {
                [index] : {
                    done : { $set : changedDone }
                }
            })
            return newTodolist;
        default:
            return todolist;
    }
}

export default TodoReducer;