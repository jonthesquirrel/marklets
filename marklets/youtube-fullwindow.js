(function() {
  var url = location.href;
  var videoCode = url.match(/\?v=([a-zA-Z0-9_\-]+)/)[1];
  var newUrl = "https://youtube.com/v/" + videoCode;
  window.location = newUrl;
})();
