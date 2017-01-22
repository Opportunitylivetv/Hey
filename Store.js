/**
 * @flow
 */
import { createStore } from 'redux'

const Reducer = require('./Reducer');

module.exports = createStore(Reducer);
