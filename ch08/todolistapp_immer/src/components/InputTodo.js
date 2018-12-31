import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        this.props.addTodo(this.state.todo);
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

InputTodo.propTypes = {
  addTodo : PropTypes.func.isRequired
};

export default InputTodo;