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
    case Actions.LOAD_STATE:
      return action.state;
    case Actions.ADD_FEEL:
      return {
        ...state,
        feels: state.feels.concat([{
          time: Date.now(),
          text: action.text,
          stickerName: action.sticker.getName(),
        }]),
      };
    case Actions.REMOVE_FEEL:

      return {
        ...state,
        feels: state.feels.filter(
          feel => JSON.stringify(feel) !== JSON.stringify(action.feelObj),
        ),
      };
  }
};
