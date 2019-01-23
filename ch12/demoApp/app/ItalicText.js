import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    italic : { fontStyle:'italic' }
});

class ItalicText extends Component {
    render() {
         return (
         <Text style={styles.italic}>
              {this.props.children}
         </Text>
         );
    }
}

export default ItalicText;