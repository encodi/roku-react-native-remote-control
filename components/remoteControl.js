import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

class RemoteControl extends Component {
  render () {
    constructor(props) {
      super(props);
      this.handleUp = this.handleUp.bind(this);
      this.handleDown = this.handleDown.bind(this);
      this.handleLeft = this.handleLeft.bind(this);
      this.handleRight = this.handleRight.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleUp() {
      
    }
    handleDown() {

    }
    handleLeft() {

    }
    handleRight() {

    }
    handleSelect() {

    }
    return(
      <View style={styles.container}>
        <Button style={styles.button} name="Up" title="Up" onPress={this.handleUp} />
        <Button style={styles.button} name="Down" title="Down" onPress={this.handleDown} />
        <Button style={styles.button} name="Left" title="Left" onPress={this.handleLeft} />
        <Button style={styles.button} name="Right" title="Right" onPress={this.handleRight} />
        <Button style={styles.button} name="Select" title="Select" onPress={this.handleSelect} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 50,
    height: 50
  }
});

export default RemoteControl;
