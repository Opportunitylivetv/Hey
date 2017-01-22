/**
 * @flow
 */

const Actions = require('./Actions');
const Feel = require('./Feel');

type State = {
  feels: Array<Object>,
};

module.exports = (state: State, action: Object) => {
  state = state || {feels: []};
  switch (action.type) {
    case Actions.ADD_FEEL:
      return {
        ...state,
        feels: state.feels.concat([
          new Feel(
            Date.now(),
            action.text,
            action.sticker.getName(),
          ),
        ]),
      };
  }
};
