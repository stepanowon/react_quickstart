import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    todolist: stores.todoStore.todolist,
}))
@observer
class TodoList extends Component {
    render() {
        const { todolist } = this.props;

        return (
            <ul className="list-group">
                {todolist.map((item)=> {
                    return (
                        <TodoItem key={item.no} {...item} />
                    )
                })}
            </ul>
        );
    }
}

export default TodoList;