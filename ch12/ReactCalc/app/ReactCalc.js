import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

//버튼 리스트
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

class ReactCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }
    }

    handleNumButtonPress(input) {
        switch (typeof input) {
            case 'number':
                return this.handleNumberInput(input);
            case 'string':
                return this.handleStringInput(input);
        }
    }

    handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;
        }
    }

    handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;
        this.setState({
            inputValue: inputValue
        })
    }

    renderInputButtonList() {
        let views = [];
        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];
                inputRow.push(
                    <InputButton
                        value={input}
                        highlight={this.state.selectedSymbol === input}
                        onPress={this.handleNumButtonPress.bind(this, input)}
                        key={r + "-" + i}/>
                );
            }
            views.push(<View style={Style.inputRow} 
                key={"row-" + r}>{inputRow}</View>);
        }
        return views;
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>
                         {this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this.renderInputButtonList()}
                </View>
            </View>
        )
    }
}
export default ReactCalc;