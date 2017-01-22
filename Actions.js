/**
 * @flow
 */

const ACTIONS = {
  ADD_FEEL: 'ADD_FEEL',
};

for (var key in ACTIONS) {
  if (key !== ACTIONS[key]) {
    throw new Error('bad val for ' + key);
  }
}
module.exports = ACTIONS;
