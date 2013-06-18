var Less = new Backbone.Marionette.Application();

Less.module('Data', $.noop);
Less.module('Models', $.noop);
Less.module('Collections', $.noop);
Less.module('Views', $.noop);


Less.module('Config', function (Config) {

  Config.api_endpoint = 'https://api.context.io/2.0/';
  Config.api_key = 'c90eiq20';
  Config.api_secret = '6XLt2Pfovc5ymsWE';

  Config.account_id = '51a4debc064ba3a21400002f';

  Config.accountScope = function (url) {
    return Config.api_endpoint + Config.account_id + '/' + url;
  };

});

Less.addInitializer(function () {
  Less.Data.messages = new Less.Collections.Messages();
  Less.Data.messages.fetch();
});

$($.proxy(Less.start, Less));
