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

const MIN_INPUT_HEIGHT = 40;

type State = {
  text: string,
  textHeight: number,
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
      textHeight: MIN_INPUT_HEIGHT,
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
            style={[styles.textBox, {height: this.state.textHeight}]}
            underlineColorAndroid="transparent"
            maxLength={300}
            value={this.state.text}
            multiline={true}
            onChangeText={(val) => this.setState({text: val})}
            placeholder="Enter your feelz"
            placeholderTextColor={Colors.whyDark}
            onContentSizeChange={ev => this.setState({
              textHeight: Math.max(
                MIN_INPUT_HEIGHT,
                ev.nativeEvent.contentSize.height,
              ),
            })}
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
    alignItems: 'center',
    flex: 1,
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
    minHeight: MIN_INPUT_HEIGHT,
    padding: 8,
    fontSize: 20,
    color: Colors.whyDark,
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
