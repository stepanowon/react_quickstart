import { observable, action } from 'mobx';
import produce from 'immer';

class TodoStore {
    @observable todolist = [
        { no:1, todo:"React 학습", done:false },
        { no:2, todo:"Redux 학습", done:false },
        { no:3, todo:"Bootstrap 살펴보기", done:true }
    ]

    @action addTodo = (todo) => {
        this.todolist = produce(this.todolist, (draft)=>{
            draft.push({ no: new Date().getTime(), todo:todo, done:false })
        });
    }
    @action deleteTodo = (no) => {
        let index = this.todolist.findIndex((item)=> item.no === no);
        this.todolist = produce(this.todolist, (draft)=>{
            draft.splice(index,1);
        });
    }
    @action toggleDone = (no) => {
        let index = this.todolist.findIndex((item)=> item.no === no);
        this.todolist = produce(this.todolist, (draft)=>{
            draft[index].done = !draft[index].done;
        });
    }
}

export default new TodoStore();