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

type State = {
  text: string,
};
type Props = {
};

class WhyBlock extends Component<void, Props, State> {

  state: State;

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.whyContainer}>
          <Text style={styles.whyText}>
            y?
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.textBox}>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              bbl
            </Text>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  whyText: {
    color: Colors.whyDark,
    fontSize: 20,
  },
  whyContainer: {
    paddingVertical: 12,
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.composeDark,
    marginVertical: 12,
    height: 40,
    flex: 1,
  },
  button: {
    backgroundColor: Colors.composeDark,
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonText: {
    lineHeight: 40,
    fontSize: 20,
    color: 'white',
  },
});

module.exports = WhyBlock;
