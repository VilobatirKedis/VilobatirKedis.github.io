$(document).ready(function() {
  setTimeout(function() {
    $(".loader").animate({
      opacity: 0
    }, 300, function() {
      $(".loader").remove();
      $("#handler").addClass("selection");
      $("#handler2").addClass("textslide");
    });

  }, 1800);
})