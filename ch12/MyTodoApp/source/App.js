import React, { Component, PropTypes } from 'react';
import todoStore from './stores/TodoStore';
import constants from './Constants';
import todoActionCreators from './actions/TodoActionCreators';
import TodoApp from './components/TodoApp';
import { connect, Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (item) => dispatch(todoActionCreators.addItem(item)),
        onRemoveItem: (index) => dispatch(todoActionCreators.removeItem(index))
    }
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp)

const App = () => {
    return (
        <Provider store={todoStore}>
            <TodoAppContainer />
        </Provider>
    );
};

export default App;
