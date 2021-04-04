$(document).ready(function() {
  setTimeout(function() {
    document.querySelector(".transition").classList.remove("is-active");
    $("#handler").addClass("selection");
    $("#handler2").addClass("textslide");
  }, 500);

  const anchors = $("a");

  for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
      event.preventDefault();
      
      const href = event.currentTarget.href;
      document.querySelector(".transition").classList.add("is-active");
      setTimeout(function() {
        window.location.href = href;
      }, 500);
    });
  }
});