import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCount from './TodoCount';

class TodoListView extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <TodoList />
                    <TodoCount />
                </div>
            </div>
        );
    }
}

export default TodoListView;