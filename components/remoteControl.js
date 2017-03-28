import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

class RemoteControl extends Component {
  render () {
    return(
      <View style={styles.container}>
        <Button name="Up" title="Up" onPress={this.props.handleClick} />
        <Button name="Down" title="Down" onPress={this.props.handleClick} />
        <Button name="Left" title="Left" onPress={this.props.handleClick} />
        <Button name="Right" title="Right" onPress={this.props.handleClick} />
        <Button name="Select" title="Select" onPress={this.props.handleClick} />
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
  }
});

export default RemoteControl;
