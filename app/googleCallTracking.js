// <!-- Google Code for Call from website Conversion Page
// In your html page, add the snippet and call
// goog_report_conversion when someone clicks on the
// chosen link or button. -->

  /* <![CDATA[ */
  goog_snippet_vars = function() {
    var w = window;
    w.google_conversion_id = 926022686;
    w.google_conversion_label = "v0MqCNSj0GQQnvjHuQM";
    w.google_remarketing_only = false;
  }
  // DO NOT CHANGE THE CODE BELOW.
  goog_report_conversion = function(url) {
    goog_snippet_vars();
    window.google_conversion_format = "3";
    var opt = new Object();
    opt.onload_callback = function() {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  }
  var conv_handler = window['google_trackConversion'];
  if (typeof(conv_handler) == 'function') {
    conv_handler(opt);
  }
}
/* ]]> */
