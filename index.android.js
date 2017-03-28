/**
 * Roku remote control component for react native
 * @author: encodi.mx@gmail.com
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RemoteControl from './components/remoteControl';

export default class rokuReactNativeRemoteControl extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    fetch('https://192.168.1.154:8060/keypress/'+e.target.name, {
      method: 'POST'
    }).then(
      response => {
        console.log("Pressed");
      }
    ).catch(
      error => {

      }
    )

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Roku Remote Control
        </Text>
        <RemoteControl handleClick={this.handleClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('rokuReactNativeRemoteControl', () => rokuReactNativeRemoteControl);
