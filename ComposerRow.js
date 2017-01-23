/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

const Sizes = require('./Sizes');
const ComposerHeader = require('./ComposerHeader');
const PreviousFeels = require('./PreviousFeels');

import type { Sticker } from './Stickers';

type Props = {
  currentSticker: ?Sticker,
  onPageChange: Function,
};

const SIZE = 300;

class ComposerRow extends Component<void, Props, void> {

  props: Props;

  _scroll: any;
  _scrollWidth: number;
  _page: number;
  _pendingReset: boolean;

  render() {
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        ref={this.setScrollRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={10}
        onMomentumScrollEnd={this.handleScroll}
        horizontal={true}>
        <View
          onLayout={this.onContentLayout}
          style={styles.contentContainer}>
          <PreviousFeels />
          <ComposerHeader currentSticker={this.props.currentSticker} />
        </View>
      </ScrollView>
    );
  }

  handleScroll = (event: Object) => {
    const nativeEvent = event.nativeEvent;
    const scrollWidth = nativeEvent.layoutMeasurement.width;
    const innerScrollWidth = nativeEvent.contentSize.width;
    const horizontalPages = Math.floor(innerScrollWidth / scrollWidth);
    const page = Math.min(
      Math.max(
        Math.floor(nativeEvent.contentOffset.x / scrollWidth + 0.5),
        0,
      ),
      horizontalPages,
    );
    if (this._page === undefined) {
      // unset, it will be the max so just bail
      this._page = horizontalPages;
      return;
    }
    if (this._page !== page) {
      this._page = page;
      this.props.onPageChange(page, horizontalPages);
    }
  }

  onContentLayout = (event: Object) => {
    this._scrollWidth = event.nativeEvent.layout.width;
    if (this._pendingReset) {
      this._pendingReset = false;
      this.resetScroll();
    }
  };

  setScrollRef = (scroll: Object) => {
    this._scroll = scroll;
  };

  resetScroll = () => {
    if (!this._scroll || !this._scrollWidth) {
      this._pendingReset = true;
      return;
    }
    this._scroll.scrollTo({
      x: this._scrollWidth - Dimensions.get('window').width / 2,
      y: 0,
      animated: true,
    });
  };
}

const styles = StyleSheet.create({
  scroll: {
    width: Dimensions.get('window').width / 2,
    overflow: 'visible',
    maxHeight: SIZE,
    height: SIZE,
    marginBottom: -100,
  },
  contentContainer: {
    flexDirection: 'row',
    height: SIZE,
    maxHeight: SIZE,
  },
});

module.exports = ComposerRow;
