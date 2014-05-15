$(function () {

  var images = [
    {loc: 'images/1443011_80433119.jpg'},
    {loc: 'images/1443422_48687212.jpg'},
    {loc: 'images/1443762_10259429.jpg'},
    {loc: 'images/1443177_97208327.jpg'},
    {loc: 'images/1443425_32526972.jpg'},
    {loc: 'images/1443840_74928093.jpg'},
    {loc: 'images/1443198_66484607.jpg'},
    {loc: 'images/1443471_75505534.jpg'},
    {loc: 'images/1443329_20766042.jpg'},
    {loc: 'images/1443497_59423133.jpg'}
  ];

  $.each(images, function (index, value) {
    $('#container').append('<div class="item">');
    $('#container').append('<img src="' + value.loc + '" width="300">');
    $('#container').append('</div>');
  });

});