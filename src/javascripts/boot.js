function updateTitle () {
  document.title = "(" + Less.Data.messages.length + ") Inbox";
};

Less.addInitializer(function () {
  Less.Data.messages = new Less.Collections.Messages();
  Less.Data.threads = new Less.Collections.Threads();
});

Less.addInitializer(function () {
  Less.Data.messages.fetch();
  var l = new Less.Views.Messages.List({collection: Less.Data.messages});
  $('body').append(l.render().el);
});
