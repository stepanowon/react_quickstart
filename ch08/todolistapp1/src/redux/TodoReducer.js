import Constant from '../Constant';
import update from 'immutability-helper';

const initialState = {
    todolist : [
        { no:1, todo:"React 학습", done:false },
        { no:2, todo:"Redux 학습", done:false },
        { no:3, todo:"Bootstrap 살펴보기", done:true }
    ]
}

const TodoReducer = (state=initialState, action) => {
    let index, newTodo, newTodolist, changedDone;
    switch(action.type) {
        case Constant.ADD_TODO:
            newTodo = { no: new Date().getTime(), todo:action.payload.todo, done:false };
            newTodolist = update(state.todolist, 
                { $push : [ newTodo ] }
            )
            return { todolist: newTodolist };
        case Constant.DELETE_TODO:
            index = state.todolist.findIndex((todo) => todo.no === action.payload.no)
            newTodolist = update(state.todolist, 
                { 
                    $splice: [[ index, 1 ]] 
                }
            )
            return { todolist: newTodolist };
        case Constant.TOGGLE_DONE:
            index = state.todolist.findIndex((todo) => todo.no === action.payload.no)
            changedDone = !state.todolist[index].done;
            newTodolist = update(state.todolist, {
                [index] : {
                    done : { $set : changedDone }
                }
            })
            return { todolist:newTodolist };
        default:
            return state;
    }
}

export default TodoReducer;