Less.module('Models', function (Models) {

  var Message = {
  };

  Message.getPlainBody = function () {
    return _.findWhere(this.get('body'), {type: 'text/plain'});
  };

  Message.getFrom = function () {
    var from = this.get('addresses').from;
    return from.name || from.email;
  };

  Models.Message = Backbone.Model.extend(Message);

});
