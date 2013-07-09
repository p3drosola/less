Less.module('Collections', function (Collections) {

  var Threads = {
    url: function () {
      return Less.Config.accountScope('threads?folder=%5CInbox&limit=20&include_body=1');
    },
    model: Less.Models.Thread
  };


  Threads.initialize = function () {
    Less.Data.messages.on('reset', Threads.updateIds, this);
    Less.Data.messages.on('sync', Threads.updateIds, this);
  };

  /**
   * Rebuilds the threads list according to the contents of the messages list
   * @return {[type]} [description]
   */
  Threads.updateIds = function () {
    this.reset(_.map(_.uniq(Less.Data.messages.pluck('gmail_thread_id')), function (id) {
      return {id: id};
    }));
  };

  /**
   * Parses the bullshit response from Context.IO
   *
   * @param  {Array} data
   * @return {Array}
   */
  Threads.parse = function (data) {
    return _.map(data, function (url) {
      return {
        id: Less.Models.Thread.getIdFromUrl(url),
        api_url: url
      };
    });
  };

  Collections.Threads = Backbone.Collection.extend(Threads);

});
