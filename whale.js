jQuery(document).ready(function($) {
  var num = parseInt(location.hash.substr(1));
  console.log(num);
  $.get('/whale/txt/' + num + '.txt', function(txt)) {
    cosole.log(txt);
  }
  if (isNan(num)) {
    num = 0;
  }
});
