let SDK;

module.exports = {
  getSDK() {
    return SDK;
  },
  setSDK(pluginSDK) {
    console.log(pluginSDK)
    SDK = pluginSDK;
  }
};
