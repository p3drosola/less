Less.module('Collections', function (Colllctions) {

  var Threads = {
    //model: Less.Models.Threads
  };

  Threads.url = function () {
    return Less.Config.accountScope('threads');
  };

  Colllctions.Threads = Backbone.Collection.extend(Threads);

});
