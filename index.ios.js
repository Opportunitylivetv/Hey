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
const ComposerHeader = require('./ComposerHeader');
const Stickers = require('./Stickers');

export default class Hey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Sup?
        </Text>
        <ComposerHeader
          currentSticker={Stickers.getForName('scary')}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
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
