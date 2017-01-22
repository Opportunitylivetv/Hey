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
  LayoutAnimation,
} from 'react-native';

const StickerPicker = require('./StickerPicker');
const WhyBlock = require('./WhyBlock');
const ComposerHeader = require('./ComposerHeader');
const Stickers = require('./Stickers');

import type {Sticker} from './Stickers';

type Props = {};
type State = {
  currentSticker: ?Sticker,
};

export default class Hey extends Component<void, Props, State> {

  props: Props;
  state: State;

  constructor() {
    super();
    this.state = {
      currentSticker: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Sup?
        </Text>
        <ComposerHeader currentSticker={this.state.currentSticker} />
        {this.state.currentSticker && (
          <WhyBlock onCompose={(why) => alert(why)} />
        )}
        <StickerPicker
          opened={this.state.currentSticker === null}
          onStickerPress={(name) => {
            this.setState({
              currentSticker: Stickers.getForName(name),
            });
            LayoutAnimation.easeInEaseOut();
          }}
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
