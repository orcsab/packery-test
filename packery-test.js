$(function () {

  var images = [
    {loc: 'images/1443011_80433119.jpg', rating: 3},
    {loc: 'images/1443422_48687212.jpg', rating: 7},
    {loc: 'images/1443762_10259429.jpg', rating: 4},
    {loc: 'images/1443177_97208327.jpg', rating: 1},
    {loc: 'images/1443425_32526972.jpg', rating: 9},
    {loc: 'images/1443840_74928093.jpg', rating: 8},
    {loc: 'images/1443198_66484607.jpg', rating: 5},
    {loc: 'images/1443471_75505534.jpg', rating: 6},
    {loc: 'images/1443329_20766042.jpg', rating: 2},
    {loc: 'images/1443497_59423133.jpg', rating: 0}
  ];

  var $container = $('#container');
  var pckry = $container.packery({
    itemSelector: '.item',
    gutter: 10,
    // isHorizontal: true
  });

  // hints from http://codepen.io/desandro/pen/mjcGq
  $.each(images, function (index, value) {
    var item = '<img class="item" src="' + value.loc + '" >';
    var $item = $(item);
    if (value.rating / 3 > 2) {
      console.log('adding class')
      $item.addClass('w3');
    }
    else if (value.rating / 3 > 1)
      $item.addClass('w2');

    $container.append($item).packery('appended', $item);
  });

  $.each($container.packery('getItemElements'), function (index, value) {
    var drag = new Draggabilly(value);
    $container.packery('bindDraggabillyEvents', drag);
  });

  $(window).load(function () {
    console.log("window loaded");
    $container.packery('layout');
  });

});