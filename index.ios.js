/**
 * Journal those feels!
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

const Actions = require('./Actions');
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
        <ComposerHeader currentSticker={this.state.currentSticker} />
        {this.state.currentSticker && (
          <WhyBlock
            onCompose={(whyText) => {
              /*
              Dispatcher.dispatch({
                type: Actions.ADD_FEEL,
                text: whyText,
                sticker: this.state.currentSticker,
              });*/
            }}
          />
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
});

AppRegistry.registerComponent('Hey', () => Hey);
