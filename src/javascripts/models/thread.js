Less.module('Models', function (Models) {

  var Thread = {}, ThreadStatic = {},
  id_regex = /https:\/\/api\.context\.io\/2\.0\/accounts\/[^\/]*\/threads\/gm-(.*)/;


  Thread.url = function () {
    return Less.Config.accountScope('threads/' + this.id + '/?include_body=1&include_flags=1');
  };

  Thread.hasMany = function () {
    return {
      messages: { collection: Less.Data.messages, id: 'gmail_thread_id' }
    };
  };

  ThreadStatic.getIdFromUrl = function (url) {
    var match = id_regex.exec(url);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };

  Models.Thread = Backbone.Model.extend(Thread, ThreadStatic);

});
