var Less = new Backbone.Marionette.Application();

Less.module('Data', $.noop);
Less.module('Models', $.noop);
Less.module('Collections', $.noop);
Less.module('Views', $.noop);


Less.module('Config', function (Config) {

  Config.api_url = 'http://localhost:9000/';
  Config.account_id = '51a4debc064ba3a21400002f';

  Config.accountScope = function (url) {
    var url = Config.api_url + 'accounts/' + Config.account_id + '/' + url;
    if (url.indexOf('?') == -1) {
      url += '?';
    } else {
      url += '&';
    }
    url += 'cachebuster=' + Math.random();
    return url;
  };

});

function updateTitle () {
  document.title = "(" + Less.Data.messages.length + ") Inbox";
};

Less.addInitializer(function () {
  Less.Data.messages = new Less.Collections.Messages();
  Less.Data.threads = new Less.Collections.Threads();


  Less.Data.messages.fetch();

  // var l = new Less.Views.Messages.List({collection: Less.Data.messages});
  // $('body').append(l.render().el);
  //Less.Data.messages.on('reset', updateTitle);
  //Less.Data.messages.on('sync', updateTitle);
  //Less.Data.threads.fetch();

});

$($.proxy(Less.start, Less));
