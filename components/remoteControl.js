import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import axios from 'axios';

class RemoteControl extends Component {
  constructor(props) {
    super(props);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleRemoteControl = this.handleRemoteControl.bind(this);
  }
  handleRemoteControl(event) {
    axios.post('http://192.168.1.154:8060/keypress/'+event).then(
      response => {
        console.log("Response >>> ", response);
      }
    ).catch(
      error => {
        console.log("Error >>> ", error);
      }
    )
  }
  handleUp() {
    this.handleRemoteControl('Up');
  }
  handleDown() {
    this.handleRemoteControl('Down');
  }
  handleLeft() {
    this.handleRemoteControl('Left');
  }
  handleRight() {
    this.handleRemoteControl('Right');
  }
  handleSelect() {
    this.handleRemoteControl('Select');
  }
  handleBack() {
    this.handleRemoteControl('Back');
  }
  handleHome() {
    this.handleRemoteControl('Home');
  }
  render () {
    return(
      <View style={styles.container}>
        <View style={styles.containerRowLeft}>
          <Button style={styles.button} name="Back" title="Back" onPress={this.handleBack} />
          <Button style={styles.button} name="Home" title="Home" onPress={this.handleHome} />
        </View>
        <View style={styles.containerRow}>
          <Button style={styles.button} name="Up" title="Up" onPress={this.handleUp} />
        </View>
        <View style={styles.containerRow}>
          <Button style={styles.button} name="Left" title="Left" onPress={this.handleLeft} />
          <Button style={styles.button} name="Select" title="Select" onPress={this.handleSelect} />
          <Button style={styles.button} name="Right" title="Right" onPress={this.handleRight} />
        </View>
        <View style={styles.containerRow}>
          <Button style={styles.button} name="Down" title="Down" onPress={this.handleDown} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRowLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  button: {
  }
});

export default RemoteControl;
