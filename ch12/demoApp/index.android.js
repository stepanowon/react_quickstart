/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, TextInput,
  View, Image
} from 'react-native';
import ItalicText from './app/ItalicText';
import ListViewBasics from './app/ListViewBasics';
import TextSample from './app/TextSample';

export default class demoApp extends Component {
  render() {
    return (
      <View style={styles.container3}>
        <View style={{flex:1, backgroundColor:'yellow' }}>
          <Text style={{fontSize:30}}>A</Text>
        </View>
        <View style={{flex:1, backgroundColor:'aqua' }}>
          <Text style={{fontSize:30}}>B</Text>
        </View>
        <View style={{flex:1, backgroundColor:'red' }}>
          <Text style={{fontSize:30}}>C</Text>
        </View>
        <View style={{flex:1, backgroundColor:'blue' }}>
          <Text style={{fontSize:30}}>D</Text>
        </View>
      </View>
    );



    /*
    return (
      <View style={styles.container}>
          <ItalicText>Hell React Native</ItalicText>
          <Image source={{ uri : 'https://facebook.github.io/react/img/logo_og.png' }} 
            style={{width:200, height:200}}>
              <Text style={{color:'yellow', textAlign:'center'}}>React</Text>
          </Image>
          <ListViewBasics />
          <TextSample />
      </View>
    );
    */


  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
*/


const styles = StyleSheet.create({
    container1 : { flex:1, flexDirection:'row' },
    container2 : { flex:1, flexDirection:'row-reverse' },
    container3 : { flex:1, flexDirection:'column' },
    container4 : { flex:1, flexDirection:'column-reverse' }
});

AppRegistry.registerComponent('demoApp', () => demoApp);
