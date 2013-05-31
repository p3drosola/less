(function () {
  var Less = {
  };

  Less.initialize = function () {
    this.ui = {
      tiles_container: $('.tiles-container'),
      tiles_scene: $('.tiles-scene'),
      button_new_msg: $('.action-new-message')
    };
    this.initInbox();
  };

  Less.initInbox = function () {
    $(document).on('dragstart', '.message-tile', Less.onDragTileStart);
    $(document).on('dragover',  '.message-tile', Less.onDragTileOver);
    $(document).on('dragenter', '.message-tile', Less.onDragTileEnter);
    $(document).on('dragleave', '.message-tile', Less.onDragTileLeave);
    $(document).on('dragend',   '.message-tile', Less.onDragTileEnd);

    $(document).on('click', '.message-tile', this.showDetail);
  };

  Less.showSpace = function (view) {
    $('body').removeClass('s-inbox s-detail s-workspace').addClass('s-' + view);
  };

  /**
   * Shows the view to compose a new email
   */
  Less.showDetail = function () {
    Less.showSpace('detail');
    Less.ui.button_new_msg.addClass('s-discard');
    $(document).on('keydown', Less.showDetailInput);
    $(document).one('click', '.send-button', Less.hideDetail);
  };

  Less.hideDetail = function () {
    $('body').removeClass('s-detail-input s-detail');
  };

  Less.showDetailInput = function (e) {
    if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
      $('body').addClass('s-detail-input');
      $('.message-input').focus();
      $(document).off('keypress', Less.showDetailInput);
    }
  };

  /**
   * Handles the drag start event, the context is a tile element
   * @param  {event} event
   * @return {[type]}       [description]
   */
  Less.onDragTileStart = function (event) {
    console.log('dragstart');

    Less.showSpace('workspace'); // zoom out
    event.originalEvent.dataTransfer.dropEffect = 'move'; // remove the green (+) cursor
    var avatar = $(this).find('.message-tile-avatar')[0];
    event.originalEvent.dataTransfer.setDragImage(avatar, 33, 33); // set the drag image
    setTimeout($.proxy(function () { this.style.opacity = 0; }, this), 0); // hide the tile
  };

  /**
   * Triggered during the drag operation
   * @param  {Event} event
   * @return {Boolean} false
   */
  Less.onDragTileOver = function (event) {
    console.log('dragover');
    event.originalEvent.dataTransfer.dropEffect = 'move'; // remove the green (+) cursor
    return false; // Necessary. Allows us to drop.
  };

  /**
   * When a tile enters a valid dropzone.
   * Context is the dropzone
   * @param  {Event} event
   */
  Less.onDragTileEnter = function (event) {
    this.classList.remove('s-dragover');
    return false; // Necessary. Allows us to drop.
  };

  /**
   * When a tile leaves a valid dropzone.
   * Context is the dropzone
   * @param  {Event} event
   */
  Less.onDragTileLeave = function (event) {
    this.classList.add('s-dragover');
  };

  /**
   * When a drag ends, sucessfully or not
   * @param  {Event} event
   */
  Less.onDragTileEnd = function (event) {
    console.log('dragend');
    Less.showSpace('inbox');
    console.log('drag end');
  };

  $($.proxy(Less.initialize, Less));
  window.Less = Less;
}());




