/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const Stickers = require('./Stickers');
import type { Sticker } from './Stickers';

type RowProps = {
  stickers: Array<Sticker>,
  onStickerPress: Function,
};

class StickerRow extends Component<void, RowProps, void> {
  props: RowProps;

  render() {
    return (
      <View style={styles.stickerPage}>
        {this.props.stickers.map(sticker =>
          <TouchableOpacity
            key={sticker.getName()}
            onPress={() => this.props.onStickerPress(sticker.getName())}>
            <Image
              source={sticker.getImage()}
              style={styles.sticker}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }

}

type PickerProps = {
  onStickerPress: Function,
  opened: boolean,
};

class StickerPicker extends Component<void, PickerProps, void> {
  render() {
    const row1 = [];
    const row2 = [];

    Stickers.getAll().forEach((sticker, index) => {
      if (index % 2 === 0) {
        row1.push(sticker);
      } else {
        row2.push(sticker);
      }
    });

    return (
      <View style={[
          styles.container,
          this.props.opened ? null : styles.closed
        ]}>
        <ScrollView
          contentContainerStyle={{alignItems: 'center'}}
          style={styles.stickerChooser}>
          <View style={[
              styles.rowContainer,
              this.props.opened ? null : styles.invisible,
            ]}>
            <StickerRow
              onStickerPress={this.props.onStickerPress}
              stickers={row1}
            />
            <StickerRow
              onStickerPress={this.props.onStickerPress}
              stickers={row2}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  invisible: {
    opacity: 0,
  },
  closed: {
    flex: 0,
    position: 'absolute',
    bottom: 0,
    height: 10,
  },
  stickerChooser: {
    backgroundColor: '#e9ebee',
    width: Dimensions.get('window').width,
  },
  stickerPage: {
    flexDirection: 'column',
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  sticker: {
    height: 100,
    width: 100,
    marginBottom: 12,
  },
});

module.exports = StickerPicker;
