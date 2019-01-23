import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import styles from './styles.js';

class TextSample extends Component {
    render() {
        return (
            <View>
                <Text style={styles.test1}>test1</Text>
                <Text style={styles.test2}>test2</Text>
                <Text style={[styles.test1, styles.test2]}>test3</Text>
                <Text style={[styles.test2, styles.test1]}>test4</Text>
            </View>
        )
    }
}

export default TextSample;