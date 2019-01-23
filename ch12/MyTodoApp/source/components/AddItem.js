import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import DismissKeyboard from 'dismissKeyboard';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(text) {
        this.setState({text});
    }

    reset() {
        this.setState({text: ''});
    }

    save() {
        if (this.state.text.trim() != "") {
            this.props.add(this.state.text);
            this.reset();
            DismissKeyboard();
        }
    }

    render(){
        return (
        <View style={{backgroundColor:'aqua', flex: 1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
            <TextInput style={{width:200}}
                ref="item"
                placeholder={ 'type task!!' }
                onChangeText={ this.handleTextChange }
                onSubmitEditing={ this.reset }
                value={ this.state.text || '' }
            />
            <TouchableHighlight style={{width:100}}
                onPress={ this.save.bind(this) }
                activeOpacity={1}>
                    <Text style={{fontSize:20}}>저장</Text>
            </TouchableHighlight>
        </View>
        )
    }
}

export default AddItem;