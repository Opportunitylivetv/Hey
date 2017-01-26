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
  UIManager,
} from 'react-native';

const Sizes = require('./Sizes');
const ComposerHeader = require('./ComposerHeader');
const PreviousFeels = require('./PreviousFeels');
const Store = require('./Store');

import type { Sticker } from './Stickers';

type Props = {
  currentSticker: ?Sticker,
  onPageChange: Function,
  onComposeStickerTap: Function,
};

const SIZE = 300;

class ComposerRow extends Component<void, Props, void> {

  props: Props;

  _scroll: any;
  _scrollWidth: number;
  _page: number;
  _totalPages: number;
  _pendingReset: boolean;

  render() {
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        ref={this.setScrollRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onMomentumScrollEnd={this.handleScroll}
        onScroll={this.handleScroll}
        horizontal={true}>
        <View
          onLayout={this.onContentLayout}
          style={styles.contentContainer}>
          <PreviousFeels />
          <ComposerHeader
            currentSticker={this.props.currentSticker}
            onComposeStickerTap={this.props.onComposeStickerTap}
          />
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    Store.subscribe(() => {
      if (!this._scroll) {
        return;
      }
      if (this._page === undefined) {
        // has not been evaluated yet
        return;
      }
      const newNumPages = Store.getState().feels.length + 1;
      // Lets handle the case where we deleted a feel and we are at the end
      if (this._totalPages <= newNumPages) {
        return;
      }

      this._totalPages = newNumPages;
      this._page = Math.min(this._page, this._totalPages - 1);
      this.props.onPageChange(this._page, this._totalPages);
    });
  }

  handleScroll = (event: Object) => {
    const nativeEvent = event.nativeEvent;
    // We divide this by two since our pages are half the screen width
    const pageWidth = nativeEvent.layoutMeasurement.width / 2;
    const innerScrollWidth = nativeEvent.contentSize.width - Sizes.COMPOSER_HORIZONTAL_PADDING;
    const horizontalPages = Math.floor(innerScrollWidth / pageWidth);
    const page = Math.min(
      Math.max(
        Math.floor(nativeEvent.contentOffset.x / pageWidth + 0.5),
        0,
      ),
      horizontalPages,
    );
    if (this._page === undefined) {
      // unset, it will be the max so just bail
      this._page = horizontalPages;
      return;
    }
    this._totalPages = horizontalPages;
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
      x: this._scrollWidth - Dimensions.get('window').width,
      y: 0,
      animated: true,
    });
  };
}

const styles = StyleSheet.create({
  scroll: {
    width: Dimensions.get('window').width,
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
