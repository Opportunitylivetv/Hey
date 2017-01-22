/**
 * @flow
 */

const assign = require('object-assign');
const Dispatcher = require('./Dispatcher');
const EventEmitter = require('events').EventEmitter;

const Actions = require('./Actions');

const CHANGE_EVENT = 'change';

/**
 * This store holds all the feels that we have so far,
 * either loaded from local storage or added.
 */
var FeelStore = assign(
{},
EventEmitter.prototype,
{
  subscribe: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  unsubscribe: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  dispatchToken: Dispatcher.register((action) => {
    let shouldInform = false;
    switch (action.type) {
      case Actions.ADD_FEEL:
        alert('added');
        shouldInform = true;
      // Nothing so far
    }

    if (shouldInform) {
      FeelStore.emit(CHANGE_EVENT);
    }
  })

});

module.exports = FeelStore;
