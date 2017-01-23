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
const ComposerRow = require('./ComposerRow');
const Stickers = require('./Stickers');
const Store = require('./Store');
const PreviousFeels = require('./PreviousFeels');

import type {Sticker} from './Stickers';

type Props = {};
type State = {
  currentSticker: ?Sticker,
};

export default class Hey extends Component<void, Props, State> {

  props: Props;
  state: State;

  _composer: any;

  constructor() {
    super();
    this.state = {
      currentSticker: null,
    };
  }

  componentDidMount() {
    Store.subscribe(() => this.forceUpdate());
    // TODO
              Store.dispatch({
                type: Actions.ADD_FEEL,
                text: 'foo1',
                sticker: Stickers.getForName('scary'),
              });
              Store.dispatch({
                type: Actions.ADD_FEEL,
                text: 'foo2',
                sticker: Stickers.getForName('scary'),
              });
              Store.dispatch({
                type: Actions.ADD_FEEL,
                text: 'foo2',
                sticker: Stickers.getForName('kiss'),
              });
  }

  render() {
    return (
      <View style={styles.container}>
        <ComposerRow
          currentSticker={this.state.currentSticker}
          ref={this.setComposerRef}
        />
        {this.state.currentSticker && (
          <WhyBlock
            onCompose={(whyText) => {
              Store.dispatch({
                type: Actions.ADD_FEEL,
                text: whyText,
                sticker: this.state.currentSticker,
              });
              this.setState({currentSticker: null});
              setTimeout(
                () => this._composer.resetScroll(),
                100,
              );
              // This casues issues for some reason..
              // LayoutAnimation.easeInEaseOut();
            }}
          />
        )}
        <StickerPicker
          opened={this.state.currentSticker === null}
          onStickerPress={(name) => {
            this.setState({
              currentSticker: Stickers.getForName(name),
            });
            this._composer.resetScroll();
            //LayoutAnimation.easeInEaseOut();
          }}
        />
      </View>
    );
  }

  setComposerRef = (composer: Object) => {
    this._composer = composer;
    this._composer.resetScroll();
  };

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
