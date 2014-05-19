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

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
FB.init({
  appId      : '1431313183787416',
  cookie     : true,  // enable cookies to allow the server to access
                      // the session
  xfbml      : true,  // parse social plugins on this page
  version    : 'v2.0' // use version 2.0
});

// Now that we've initialized the JavaScript SDK, we call
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}


