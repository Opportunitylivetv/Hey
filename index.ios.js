/**
 * Sample React Native App
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

const StickerPicker = require('./StickerPicker');
const WhyBlock = require('./WhyBlock');

export default class Hey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hey
        </Text>
        <Text style={styles.instructions}>
          Sup?
        </Text>
        <WhyBlock onCompose={(why) => alert(why)} />
        <StickerPicker
          onStickerPress={(name) => alert(name)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Hey', () => Hey);
