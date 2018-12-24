import { observable, action, decorate } from 'mobx'
import { observer } from 'mobx-react'

class TodoState {
    @observable todolist = [
        { no:1, todo:"React 학습", done:false },
        { no:2, todo:"Redux 학습", done:false },
        { no:3, todo:"Bootstrap 살펴보기", done:true }
    ]

    @action.bound
    addTodo(todo) {
        this.todolist.push({ no: new Date().getTime(), todo:todo, done:false })
    }
    @action.bound
    deleteTodo(no) {
        let index = this.todolist.findIndex((item)=> item.no === no);
        this.todolist.splice(index,1);
    }
    @action.bound
    toggleDone(no) {
        let index = this.todolist.findIndex((item)=> item.no === no);
        this.todolist[index].done = !this.todolist[index].done;
    }
}

export default new TodoState();