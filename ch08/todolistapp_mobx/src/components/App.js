import React from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { observer } from "mobx-react";
import todoState from '../mobx/TodoState';

const App = observer(({todoState}) => {
    return (
        <div className="container">
            <div className="well">
                <div className="title">:: Todolist App</div>
            </div>
            <div className="panel panel-default panel-borderless">
                <div className="panel-body">
                    <InputTodo addTodo={todoState.addTodo} />
                    <TodoList todolist={todoState.todolist} 
                        toggleDone={todoState.toggleDone} deleteTodo={todoState.deleteTodo}/>
                </div>
            </div>
        </div>
    );
})

export default App;