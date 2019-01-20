/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { keepScreenOn, letScreenSleep } from '@textile/react-native-screen-control'

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { locked: false };
  }

  onPressLearnMore() {
    if (this.state.locked) {
      letScreenSleep()
    } else {
      keepScreenOn()
    }
    this.setState({locked: !this.state.locked})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Control Screen Sleep</Text>
        <Button
          onPress={this.onPressLearnMore.bind(this)}
          title="Toggle"
          color={this.state.locked ? "#841584" : "#2999A2"}
          accessibilityLabel="Toggle Screen Sleep"
        />
        <Text style={styles.instructions}>{this.state.locked ? 'Screen cannot sleep' : 'Screen can sleep'}</Text>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
