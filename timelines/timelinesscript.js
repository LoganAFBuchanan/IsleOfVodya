

function recalc(){
  $(".tree-straight").each(function (i) {
    $(this).height($(this).parent().css("height"));
  });
}



$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
  recalc();
})


$( document ).ready(function() {

  recalc();
  $( window ).resize(function() {
    recalc();
  });

  $(".tree-node").hover(
  function() {
    $( this ).prev("div").children("blockquote").addClass("block-hover");
    $( this ).next("div").children("blockquote").addClass("block-hover");
  }, function() {
    $( this ).prev("div").children("blockquote").removeClass("block-hover");
    $( this ).next("div").children("blockquote").removeClass("block-hover");
  }
);

  
});
