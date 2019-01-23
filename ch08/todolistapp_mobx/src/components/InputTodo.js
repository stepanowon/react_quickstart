import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer
class InputTodo extends Component {
    constructor() {
        super()
        this.state = {
            todo : ""
        }
        this.addHandler = this.addHandler.bind(this);
        this.changeTodo = this.changeTodo.bind(this)
    }

    addHandler(e) {
        this.props.todoStore.addTodo(this.state.todo);
        this.setState({ todo: "" })
    }

    changeTodo(e) {
        this.setState({ todo : e.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input id="msg" type="text" className="form-control" name="msg" 
                            placeholder="할일을 여기에 입력!" value={this.state.todo}
                            onChange={this.changeTodo} />
                        <span className="btn btn-primary input-group-addon" onClick={this.addHandler}>추가</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputTodo;