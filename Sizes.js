/**
 * @flow
 */

import {
  Dimensions,
} from 'react-native';

class Sizes {
  static HEADER_CIRCLE = 120;
  static FEEL_SPACING = Dimensions.get('window').width / 2;
  static COMPOSER_HORIZONTAL_PADDING = Dimensions.get('window').width / 2 - Sizes.HEADER_CIRCLE / 2;
  static DETAILS_HEIGHT = 80;
};
module.exports = Sizes;
