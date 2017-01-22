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
const FeelSticker = require('./FeelSticker');

import type { Sticker } from './Stickers';

type Props = {
  currentSticker?: Sticker,
};

class ComposerHeader extends Component<void, Props, void> {

  props: Props;

  render() {
    const sticker = this.props.currentSticker;
    if (sticker) {
      return <FeelSticker sticker={sticker} />;
    }
    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({
});

module.exports = ComposerHeader;
