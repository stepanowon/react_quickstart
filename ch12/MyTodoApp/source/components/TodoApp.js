import React, { Component } from 'react';
import AddItem from './AddItem';
import List from './List';
import { View } from 'react-native';

class TodoApp extends Component {
    render() {
        console.log("##TodoApp Render : ");
        console.log(this.props.onRemoveItem);
        return (
            <View style={{ flex:1 }}>
                <View style={{ height:70 }}>
                    <AddItem add={this.props.onAddItem}/>
                </View>
                <View>
                    <List items={this.props.list} remove={this.props.onRemoveItem} />
                </View>
            </View>
        );
    }
}

export default TodoApp;
