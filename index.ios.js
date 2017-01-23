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
const StateStorage = require('./StateStorage');

import type {Sticker} from './Stickers';

type Props = {};
type State = {
  currentSticker: ?Sticker,
  viewingPrevious: boolean,
};

export default class Hey extends Component<void, Props, State> {

  props: Props;
  state: State;

  _composer: any;

  constructor() {
    super();
    this.state = {
      currentSticker: null,
      viewingPrevious: false,
    };
  }

  componentDidMount() {
    Store.subscribe(() => {
      this.forceUpdate();
      StateStorage.saveState();
    });
    StateStorage.loadState(() => {
      this._composer.resetScroll();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ComposerRow
          currentSticker={this.state.currentSticker}
          ref={this.setComposerRef}
          onPageChange={this.onComposePageChange}
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
            }}
          />
        )}
        <StickerPicker
          opened={
            this.state.currentSticker === null &&
            !this.state.viewingPrevious
          }
          onStickerPress={(name) => {
            this.setState({
              currentSticker: Stickers.getForName(name),
            });
            this._composer.resetScroll();
            LayoutAnimation.easeInEaseOut();
          }}
        />
      </View>
    );
  }

  onComposePageChange = (currentPage: number, numPages: number) => {
    const viewingPrevious = currentPage !== numPages;
    if (viewingPrevious === this.state.viewingPrevious) {
      return;
    }
    this.setState({
      viewingPrevious: currentPage !== numPages,
    });
    LayoutAnimation.easeInEaseOut();
  };

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
