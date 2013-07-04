(function (global) {
  'use strict';


  global.Backbone.chromeStorage = function (name, collection) {

    /**
     * Saves a collection's state to chrome's local storage
     * @param  {Object} options
     *     @param {Function} success
     *     @param {Function} error
     */
    collection.chromeSync = function (options) {
      var self = this,
      data = {};
      data[name] = this.toJSON();
      chrome.storage.local.set(data, function (data) {
        console.log('[chromeStorage] Saved ' + name);
        if (chrome.runtime.lastError && _.isFunction(options.error)) {
          options.error.call(self, self);
        } else if (_.isFunction(options.success)) {
          options.success.call(self, self);
        }
      });
    };

    /**
     * Reset's a collection's state from chrome's local storage
     * If chrome does not have the data stored, it will not perform the reset
     * @param  {Object} options, passed to Backbone.reset
     */
    collection.chromeFetch = function (options) {
      var self = this;
      chrome.storage.local.get(name, function (data) {
        if (data[name]) {
          self.reset(data[name], options);
          console.log('[chromeStorage] Reseting ' + name);
        }
      });
    };
  };

}(this));
