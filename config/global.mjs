const global = {
  init: function () {
    if (typeof window === 'undefined') {
      global.window = false;
    }
  },
};

export default global;
