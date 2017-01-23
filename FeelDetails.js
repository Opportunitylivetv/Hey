/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const dateformat = require('dateformat');

const Sizes = require('./Sizes');
const Colors = require('./Colors');

import Feel from './Feel';

type Props = {
  feel: ?Feel,
};

const MIDDOT = '\u00B7';

class FeelDetails extends Component<void, Props, void> {

  props: Props;

  render() {
    const {feel} = this.props;
    if (!feel) {
      return <View style={styles.container} />;
    }
    const date = new Date(feel.time);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {dateformat(date, 'mm/dd/yy')}
          {' ' + MIDDOT + ' '}
          {dateformat(date, 'h:MMtt')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.DETAILS_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.headerBorder,
  }
});

module.exports = FeelDetails;
