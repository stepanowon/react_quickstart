import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer
class TodoList extends Component {
    render() {
        const { todolist, ongoingTodoCount, doneTodoCount } = this.props.todoStore;

        let todoItems = todolist.map((item)=> {
            return (
                <TodoItem key={item.no} {...item} />
            )
        })

        return (
            <div>
                <div className="row">
                    <ul className="list-group">
                        {todoItems}
                    </ul>
                </div>
                <div className="row">진행중인 할일 : {ongoingTodoCount}</div>
                <div className="row">완료된 할일 : {doneTodoCount}</div>
            </div>
        );
    }
}

export default TodoList;