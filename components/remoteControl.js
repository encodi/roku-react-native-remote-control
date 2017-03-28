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
  render () {
    return(
      <View style={styles.container}>
        <Button style={styles.button} name="Up" title="Up" onPress={this.handleUp} />
        <View style={styles.containerRow}>
          <Button style={styles.button} name="Left" title="Left" onPress={this.handleLeft} />
          <Button style={styles.button} name="Right" title="Right" onPress={this.handleRight} />
        </View>
        <View style={styles.containerRow}>
          <Button style={styles.button} name="Down" title="Down" onPress={this.handleDown} />
        </View>
        <View style={styles.containerRow}>
          <Button style={styles.button} name="Select" title="Select" onPress={this.handleSelect} />
          <Button style={styles.button} name="Back" title="Back" onPress={this.handleBack} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    width: 50,
    height: 50
  }
});

export default RemoteControl;
