jQuery(document).ready(function($) {
  var num = parseInt(location.hash.substr(1));
  console.log(num);
  if (isNan(num)) {
    num = 0;
  }
});
