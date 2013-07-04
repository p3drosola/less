(function (global) {
  'use strict';

  /**
   * Adds functions to a Backbone.Collection for interacting with chrome.storage
   *
   * @param  {String} name, used as the storage key
   * @param  {Backbone.Collection.prototype} collection
   * @param  {[Object]} options
   *    @param {[Boolean]} debug (default: false)
   */
  global.Backbone.chromeStorage = function (name, collection, options) {
    options = options || {};
    var log = options.debug ? _.bind(console.log, console) : function () {};


    /**
     * Saves a collection's state to chrome's local storage
     *
     * @param  {[Object]} options
     *   @param {[Function]} success
     *   @param {[Function]} error
     */
    collection.chromeSync = function (options) {
      var self = this,
      data = {};
      data[name] = this.toJSON();
      chrome.storage.local.set(data, function (data) {
        log('[chromeStorage] Saved ' + name);
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
     *
     * @param  {[Object]} options, passed to Backbone.reset
     */
    collection.chromeFetch = function (options) {
      var self = this;
      chrome.storage.local.get(name, function (data) {
        if (data[name]) {
          self.reset(data[name], options);
          log('[chromeStorage] Reset ' + name);
        }
      });
    };
  };

}(this));
