import { observable, action, autorun } from 'mobx';

class TodoStore {
    @observable todolist = [
        { no:1, todo:"React 학습", done:false },
        { no:2, todo:"Redux 학습", done:false },
        { no:3, todo:"Bootstrap 살펴보기", done:true }
    ]

    @action addTodo = (todo) => {
        this.todolist.push({ no: new Date().getTime(), todo:todo, done:false });
    }
    @action deleteTodo = (no) => {
        let index = this.todolist.findIndex((item)=> item.no === no);
        this.todolist.splice(index,1);
    }
    @action toggleDone = (no) => {
        let index = this.todolist.findIndex((item)=> item.no === no);
        console.log(this.todolist[index]);
        //this.todolist[index].done = !this.todolist[index].done;
        this.todolist[index].done = !this.todolist[index].done;
        console.log(this.todolist[index]);
    }
}

const store = new TodoStore();
autorun(() => {
    console.log(store.todolist[0].done);
})

export default store;