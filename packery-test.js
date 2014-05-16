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
    // first establish the size of the image using its rating.
    var size = '';
    if (value.rating / 3 > 2)
      size = 'w3';
    else if (value.rating / 3 > 1)
      size = 'w2';

    var items = '<div class="item '+ size + '" style="position: relative; left: 0; top: 0;">';
    items += '<img src="' + value.loc + '" style="position: relative; top: 0; left: 0; max-width: 100%; height: auto;" >';
    items += '<img src="images/x-mark-5-256.png" width="30" style="position: absolute; top: 0px; left: 0px;" >';
    items += '</div>';
    var $items = $(items);
    $items.click(itemClick)
    $container.append($items).packery('appended', $items);
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

function itemClick (event) {
  if (event.offsetX <= 30 && event.offsetY <= 30) {
    var $container = $('#container');
    $container.packery('remove', event.target.parentElement);
    $container.packery('layout');
  }
}

