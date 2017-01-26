/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const FeelSticker = require('./FeelSticker');
const Feel = require('./Feel');
const Stickers = require('./Stickers');
const Store = require('./Store');
const Sizes = require('./Sizes');

import type {Sticker} from './Stickers';

class PreviousFeels extends Component {

  componentDidMount() {
    Store.subscribe(() => this.forceUpdate());
  }

  render() {
    const state = Store.getState();
    if (!state) {
      return null;
    }
    return (
      <View style={styles.container}>
        {state.feels.map(feelObj => {
          const feel = Feel.fromObj(feelObj);
          return (
            <View style={styles.feelContainer} key={feel.getKey()}>
              <FeelSticker
                sticker={Stickers.getForName(feel.stickerName)}
              />
            </View>
          );
        })}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: Sizes.COMPOSER_HORIZONTAL_PADDING,
  },
  feelContainer: {
    marginRight: Sizes.FEEL_SPACING - Sizes.HEADER_CIRCLE,
  },
});

module.exports = PreviousFeels;
