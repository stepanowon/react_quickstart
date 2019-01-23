/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class demoApp2 extends Component {

  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown'
  };
  
  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position)=> {
        var initialPosition = position.coords.latitude + ',' + position.coords.longitude;
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error))
    );

    this.watchID = navigator.geolocation.watchPosition((position)=> {
      let lastPosition=position.coords.latitude + ',' + position.coords.longitude;
      this.setState({ lastPosition });
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});


AppRegistry.registerComponent('demoApp2', () => demoApp2);