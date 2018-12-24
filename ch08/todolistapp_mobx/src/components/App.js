import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { observer, inject } from 'mobx-react';

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
                        <InputTodo addTodo={this.props.addTodo} />
                        <TodoList todolist={this.props.todolist} 
                            toggleDone={this.props.toggleDone} deleteTodo={this.props.deleteTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;