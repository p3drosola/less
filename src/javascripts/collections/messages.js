Less.module('Collections', function (Collections) {

  var Messages = {
    url: 'http://localhost:9000/inbox',
    model: Less.Models.Message
  };

  Collections.Messages = Backbone.Collection.extend(Messages);

});
