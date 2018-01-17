import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

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


App.propTypes = {
    todolist : PropTypes.arrayOf(PropTypes.object),
    addTodo : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired,
    toggleDone : PropTypes.func.isRequired
}

export default App;