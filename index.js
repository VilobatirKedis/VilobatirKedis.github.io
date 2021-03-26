$(document).ready(function() {
  setTimeout(function() {
    $(".loader").animate({
      opacity: 0
    }, 300, function() {
      $(".loader").remove();
      
    });

  }, 1700);
})