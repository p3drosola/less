Less.module('Models', function (Models) {

  var Message = {
  };

  Message.getBody = function (type) {
    var type = type || 'text/plain',
    body = _.findWhere(this.get('body') || [], {type: type});
    return body ? body.content : '';
  };

  Message.getFrom = function () {
    var from = this.get('addresses').from;
    return from.name || from.email;
  };

  Models.Message = Backbone.Model.extend(Message);

});
