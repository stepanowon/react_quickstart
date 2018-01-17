import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Style from './Style';

class InputButton extends Component {
    render() {
        return (
            <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    } 
}
export default InputButton;