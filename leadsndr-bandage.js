if (typeof(_gat) == "undefined") {
  if (typeof(ga) == "function") {
    setTimeout(function(){
      
      // Let's use the UGA tracker ID
      if (typeof(ga.getAll == "function")) {
        var first_ga_tracker = ga.getAll()[0];
        var ga_id = first_ga_tracker.get('trackingId');
      } else {
        var ga_id = "UA-999999-9";
      }
    }, 500)
  } else {
    var ga_id = "UA-999999-9";
  }
  // Let's create a fake classic GA object if one doesn't exist, shall we?
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', ga_id]);
  _gaq.push(['_trackEvent', 'GA Classic', 'Loaded']);

  (function() {
    var ga_classic = document.createElement('script'); ga_classic.type = 'text/javascript'; ga_classic.async = true;
    ga_classic.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga_classic, s);
  })();
}
