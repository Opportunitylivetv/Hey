/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Actions = require('./Actions');
const Sizes = require('./Sizes');
const Colors = require('./Colors');
const Store = require('./Store');

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
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {feel.text}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            Alert.alert(
              'Delete feel?',
              'no going back...',
              [{
                text: 'Nah',
              }, {
                text: 'OK',
                onPress: () => {
                  Store.dispatch({
                    type: Actions.REMOVE_FEEL,
                    feelObj: feel.toObj(),
                  });
                },

              }]
            );

          }}>
          <View style={styles.deleteButton}>
            <Text style={styles.deleteText}>
              forget
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  text: {
    color: Colors.headerBorder,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -40,
  },
  deleteButton: {
    backgroundColor: '#666',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 5,
  },
  deleteText: {
    color: '#EEE',
    lineHeight: 20,
  },
});

module.exports = FeelBody;
