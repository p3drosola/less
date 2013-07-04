Less.module('Collections', function (Collections) {

  var Messages = {
    url: function () {
      return Less.Config.accountScope('messages?folder=%5CInbox&limit=20&include_body=1');
    },
    model: Less.Models.Message
  };

  Messages.initialize = function () {
    this.on('sync', this.chromeSync, this);
    this.chromeFetch();
  };

  Backbone.chromeStorage('messages', Messages, {debug: true});
  Collections.Messages = Backbone.Collection.extend(Messages);

});
