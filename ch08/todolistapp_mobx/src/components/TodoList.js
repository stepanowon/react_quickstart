import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer
class TodoList extends Component {
    render() {
        const { todolist, deleteTodo, toggleDone } = this.props.todoStore;

        let todoItems = todolist.map((item)=> {
            return (
                <TodoItem key={item.no} {...item} deleteTodo={deleteTodo} 
                    toggleDone={toggleDone} />
            )
        })

        return (
            <div className="row">
                <ul className="list-group">
                    {todoItems}
                </ul>
            </div>

        );
    }
}

export default TodoList;