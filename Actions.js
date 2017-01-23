/**
 * @flow
 */

const ACTIONS = {
  ADD_FEEL: 'ADD_FEEL',
  LOAD_STATE: 'LOAD_STATE',
};

for (var key in ACTIONS) {
  if (key !== ACTIONS[key]) {
    throw new Error('bad val for ' + key);
  }
}
module.exports = ACTIONS;
