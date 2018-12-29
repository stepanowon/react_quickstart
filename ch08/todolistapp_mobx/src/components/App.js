import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { observer, inject } from 'mobx-react';
import DevTools from "mobx-react-devtools";

@inject('todoStore')
@observer
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="title">:: Todolist App</div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputTodo />
                        <TodoList />
                    </div>
                </div>
                <DevTools />
            </div>
        );
    }
}

export default App;