/**
 * @flow
 */

import {
  AsyncStorage,
} from 'react-native';
import * as firebase from 'firebase';

const Actions = require('./Actions');
const Store = require('./Store');

const STATE_KEY = 'heyState';

let _lastSaved = null;

// Initialize Firebase
const config = {
  apiKey: require('./FirebaseAuthKey'),
  authDomain: "heystore-a3231.firebaseapp.com",
  databaseURL: "https://heystore-a3231.firebaseio.com",
  storageBucket: "heystore-a3231.appspot.com",
  messagingSenderId: "434696144316"
};
firebase.initializeApp(config);

const savedStateRef = firebase.database().ref('savedUsers');
savedStateRef.on('value', (data) => {
  console.log(data.val());
});

class StateSaver {

  static saveState(): void {
    const toSave = Store.getState();
    if (!toSave || !Object.keys(toSave).length) {
      return;
    }
    const stateString = JSON.stringify(toSave);
    if (stateString === _lastSaved) {
      return;
    }
    _lastSaved = stateString;
    AsyncStorage.setItem(STATE_KEY, stateString);
  }

  static loadState(cb: Function): void {
    AsyncStorage.getItem(STATE_KEY)
      .then((stateString) => {
        Store.dispatch({
          type: Actions.LOAD_STATE,
          state: JSON.parse(stateString),
        });
        setTimeout(cb, 100);
      });
  }

}
module.exports = StateSaver;
