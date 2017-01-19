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
} from 'react-native';
const Stickers = require('./Stickers');

class StickerPage extends Component {
  render() {
    return (
      <View style={styles.stickerPage}>
        {Stickers.getAll().map(sticker =>
          <Image
            source={sticker.getImage()}
            key={sticker.getName()}
            style={styles.sticker}
          />
        )}
        {Stickers.getAll().map(sticker =>
          <Image
            source={sticker.getImage()}
            key={sticker.getName() +'2'}
            style={styles.sticker}
          />
        )}
      </View>
    );
  }
}

export default class Hey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hey
        </Text>
        <Text style={styles.instructions}>
          Sup?
        </Text>
        <ScrollView
          style={styles.stickerChooser}
          horizontal={true}>
          <StickerPage />
          <StickerPage />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  stickerChooser: {
    backgroundColor: '#e9ebee',
    height: 200,
  },
  stickerPage: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  sticker: {
    height: 100,
    width: 100,
  },
});

AppRegistry.registerComponent('Hey', () => Hey);
