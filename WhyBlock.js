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
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Colors = require('./Colors');

type State = {
  text: string,
};
type Props = {
  onCompose: Function,
};

class WhyBlock extends Component<void, Props, State> {

  state: State;
  props: Props;

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
          <TextInput
            style={styles.textBox}
            underlineColorAndroid="transparent"
            maxLength={300}
            value={this.state.text}
            onChangeText={(val) => this.setState({text: val})}
            selectTextOnFocus={true}
            placeholder="Enter your feelz"
            placeholderTextColor="#0066cc"
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonTouch}
            onPress={() => this.props.onCompose(this.state.text)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                bbl
              </Text>
            </View>
          </TouchableOpacity>
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
    flex: 1,
    minHeight: 40,
    padding: 8,
  },
  button: {
    backgroundColor: Colors.composeDark,
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonTouch: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    lineHeight: 40,
    fontSize: 20,
    color: 'white',
  },
});

module.exports = WhyBlock;
