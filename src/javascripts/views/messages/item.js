Less.module('Views.Message', function (Message) {
  var Item = {
    className: 'message-tile',
    template: '#message-item'
  };

  Item.onRender = function () {
    this.$el.attr('draggable', String(Boolean(this.options.draggable)));
  };

  Item.serializeData = function () {
    return {
      from: this.model.getFrom()
    };
  };

  Message.Item = Marionette.ItemView.extend(Item);
});
