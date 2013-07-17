$(function () {

  var Icons = {
    colors: ['#1ABC9C', '#2ECC71',  '#E74C3C', '#3498DB', '#9B59B6', '#34495E', '#F1C40F',
              '#E67E22', '#E74C3C', '#95A5A6'],
    formulas: {}
  };

  Icons.formulas.slide = function (canvas, color) {

    var ctx = canvas.getContext('2d'),
        base_color = jQuery.Color(color),
        darker_color = base_color.lightness(base_color.lightness() - 0.09);

    ctx.fillStyle = base_color.toHslaString();
    ctx.fillRect(0, 0, 66, 66);

    ctx.fillStyle = darker_color.toHslaString();
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(66, 66);
    ctx.lineTo(0, 66);
    ctx.lineTo(0, 0);
    ctx.fill();
  };

  Icons.formulas.triangle = function (canvas, color) {
    var ctx = canvas.getContext('2d'),
        base_color = jQuery.Color(color),
        darker_color = base_color.lightness(base_color.lightness() - 0.1);

    ctx.fillStyle = base_color.toHslaString();
    ctx.fillRect(0, 0, 66, 66);

    ctx.fillStyle = darker_color.toHslaString();
    ctx.beginPath();
    ctx.moveTo(0, 66);
    ctx.lineTo(33, 33);
    ctx.lineTo(66, 66);
    ctx.lineTo(0, 66);
    ctx.fill();
  };

  Icons.formulas.rightCurve = function (canvas, color) {
    var ctx = canvas.getContext('2d'),
        base_color = jQuery.Color(color),
        darker_color = base_color.lightness(base_color.lightness() - 0.1);

    ctx.fillStyle = base_color.toHslaString();
    ctx.fillRect(0, 0, 66, 66);

    ctx.fillStyle = darker_color.toHslaString();
    ctx.beginPath();
    ctx.arc(90, 33, 42, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  function shuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  _.each(Icons.formulas, function (formula) {
    shuffle(Icons.colors);
    _.each(Icons.colors, function (color) {
      var canvas = $('<canvas width="66px" height="66px">&nbsp;').appendTo('body')[0];
      formula(canvas, color);
    });
    $('body').append('<br><br>');
  });

  // var icon = parseInt(md5('p3dro.sola@gmail.com'), 16) % 50;

});
