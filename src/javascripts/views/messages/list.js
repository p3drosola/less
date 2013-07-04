Less.module('Views.Messages', function (Messages) {
  var List = {
    itemView: Messages.Item
  };

  Messages.List = Marionette.CollectionView.extend(List);
});
