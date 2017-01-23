/**
 * @flow
 */

import {
  AsyncStorage,
} from 'react-native';

const Actions = require('./Actions');
const Store = require('./Store');

const STATE_KEY = 'heyState';

let _lastSaved = null;

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
