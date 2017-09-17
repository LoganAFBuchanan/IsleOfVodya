


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

function recalc(){
  $(".tree-straight").each(function (i) {
    $(this).height($(this).parent().css("height"));
  });
}

var win = $(window);
var allMods = $("blockquote");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-left");
    }else{
      
    }
  });
});

//Animates blockquotes when they scroll into view


$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
  recalc();


  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });
})

$( document ).ready(function() {

  recalc();
  $( window ).resize(function() {
    recalc();
  });

  $(".tree-node, .tree-begin, .tree-end").hover(
  function() {
    $( this ).prev("div").children("blockquote").addClass("block-hover");
    $( this ).next("div").children("blockquote").addClass("block-hover");
  }, function() {
    $( this ).prev("div").children("blockquote").removeClass("block-hover");
    $( this ).next("div").children("blockquote").removeClass("block-hover");
  }

);


});
