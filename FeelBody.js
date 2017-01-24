/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Sizes = require('./Sizes');
const Colors = require('./Colors');

import Feel from './Feel';

type Props = {
  feel: ?Feel,
};

class FeelBody extends Component<void, Props, void> {

  props: Props;

  render() {
    const {feel} = this.props;
    if (!feel) {
      return <View />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {feel.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  text: {
    color: Colors.headerBorder,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -40,
  }
});

module.exports = FeelBody;
