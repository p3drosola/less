Less.module('Models', function (Models) {

  var Thread = {};

  Thread.hasMany = function () {
    return {
      messages: { collection: Less.Data.messages, id: 'gmail_thread_id' }
    };
  };

  Thread.messages = function () {
    if (!this._messages) {
      this._messages = new Backbone.VitualCollection(Less.Data.messages, {
        filter: {
          thread_id: this.id
        }
      });
    };
    return this._messages;
  };


  Thread.getFrom = function () {
    return this.messages().at(0).getFrom();
  };

  Thread.getBody = function () {
    return this.messages().at(0).getBody();
  };

  Thread.url = function () {
    return Less.Config.accountScope('threads/' + this.id + '/?include_body=1&include_flags=1');
  };

  Thread.onRemove = function () {
    if (this._messages) {
      this._messages.stopListening();
    }
  };

  Models.Thread = Backbone.Model.extend(Thread);

});
