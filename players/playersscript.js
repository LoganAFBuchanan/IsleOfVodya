$( document ).ready(function() {

//Switches background colour of the player/character pane when clicked
    $('a[data-toggle="tab"').on('shown.bs.tab', function (e) {

      if($(this).closest(".col-md-6").hasClass("characterPane")){
        $(this).closest(".col-md-6").removeClass("characterPane");
      }else{
        $(this).closest(".col-md-6").addClass("characterPane");
      }

    });




});
