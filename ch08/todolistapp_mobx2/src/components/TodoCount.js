import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    ongoingTodoCount: stores.todoStore.ongoingTodoCount,
    doneTodoCount: stores.todoStore.doneTodoCount
}))
@observer
class TodoCount extends Component {
    render() {
        const { ongoingTodoCount, doneTodoCount } = this.props;
        return (
            <Fragment>
                <div className="row">진행중인 할일 : {ongoingTodoCount}</div>
                <div className="row">완료된 할일 : {doneTodoCount}</div>
            </Fragment>
        );
    }
}

export default TodoCount;