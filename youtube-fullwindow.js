(function() {
  var url = location.href;
  var videoCode = url.match(/watch\?v=([a-z0-9]+)/i)[1];
  var newUrl = "https://youtube.com/v/" + videoCode;
  window.location = newUrl;
})();
