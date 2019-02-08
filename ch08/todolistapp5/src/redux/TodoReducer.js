import Constant from '../Constant';
import produce from 'immer';

const initialState = {
    todolist : [
        { no:1, todo:"React학습1", done:false },
        { no:2, todo:"React학습2", done:false },
        { no:3, todo:"React학습3", done:true },
        { no:4, todo:"React학습4", done:false },
    ]
}

const TodoReducer = (state=initialState, action) => {
    let index, newTodoList;
    switch(action.type) {
        case Constant.ADD_TODO :
            newTodoList = produce(state.todolist, (draft)=> {
                draft.push({ no:new Date().getTime(), 
                    todo:action.payload.todo, done:false});
            })
            return { todolist: newTodoList };
        case Constant.DELETE_TODO : 
            index = state.todolist.findIndex((item)=>item.no === action.payload.no);
            newTodoList = produce(state.todolist, (draft)=> {
                draft.splice(index,1);
            })
            return { todolist: newTodoList };
        case Constant.TOGGLE_DONE : 
            index = state.todolist.findIndex((item)=>item.no === action.payload.no);
            newTodoList = produce(state.todolist, (draft)=> {
                draft[index].done = !draft[index].done;
            })
            return { todolist: newTodoList };
        default : 
            return state;
    }
}

export default TodoReducer;