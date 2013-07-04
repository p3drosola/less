Less.module('Views.Messages', function (Messages) {
  var Item = {
    className: 'message-tile',
    template: Less.Templates['messages.item']
  };

  Item.onRender = function () {
    this.$el.attr('draggable', String(Boolean(this.options.draggable)));
  };

  Item.serializeData = function () {
    return {
      from: this.model.getFrom()
    , body: this.model.getBody()
    , subject: this.model.get('subject')
    };
  };

  Messages.Item = Marionette.ItemView.extend(Item);
});
