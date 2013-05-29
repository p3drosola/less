(function () {
  var Less = {
  };

  Less.initialize = function () {

    Less.ui = {
      tiles: $('.tiles-container'),
      tiles_scene: $('.tiles-scene'),
      tile_dragging: null
    };

    Less.initDraggable();
  };

  Less.initDraggable = function () {
    $(document).on('dragstart', '.message-tile', Less.onDragTileStart);
    $(document).on('dragover',  '.message-tile', Less.onDragTileOver);
    $(document).on('dragenter', '.message-tile', Less.onDragTileEnter);
    $(document).on('dragleave', '.message-tile', Less.onDragTileLeave);
    $(document).on('dragend',   '.message-tile', Less.onDragTileEnd);

  };

  Less.showSpace = function (view) {
    $('body').removeClass('s-inbox s-detail s-workspace').addClass('s-' + view);
  };


  /**
   * Handles the drag start event, the context is a tile element
   * @param  {event} event
   * @return {[type]}       [description]
   */
  Less.onDragTileStart = function (event) {
    console.log('dragstart');
    Less.showSpace('workspace');
    Less.ui.tile_dragging = $(this);
  };

  Less.onDragTileOver = function (event) {
    console.log('dragover');
    event.originalEvent.dataTransfer.dropEffect = 'copy'; // the green (+) cursor
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

  Less.onDragTileEnd = function (event) {
    console.log('dragend');
    Less.showSpace('inbox');
    console.log('drag end', Less.ui.tile_dragging);
  };


  Less.initialize();

  window.Less = Less;
}());




