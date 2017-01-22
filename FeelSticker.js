/**
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

const Colors = require('./Colors');
const Sizes = require('./Sizes');

import type { Sticker } from './Stickers';

type Props = {
  sticker: Sticker,
};

class FeelSticker extends Component<void, Props, void> {

  render() {
    return (
      <View style={styles.circle}>
        <View style={styles.stickerContainer}>
          <Image
            source={this.props.sticker.getImage()}
            style={styles.sticker}
          />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  stickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sticker: {
    height: Sizes.HEADER_CIRCLE - 40,
    width: Sizes.HEADER_CIRCLE - 40,
  },
  circle: {
    borderRadius: Sizes.HEADER_CIRCLE / 2,
    height: Sizes.HEADER_CIRCLE,
    width: Sizes.HEADER_CIRCLE,
    borderColor: Colors.headerBorder,
    borderWidth: 1,
  },
});

module.exports = FeelSticker
