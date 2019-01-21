/* eslint-disable */
module.exports = {
  init: function() {
    if (typeof window === 'undefined') {
      global.window = false;
    }
  },
};
/* eslint-enable */
