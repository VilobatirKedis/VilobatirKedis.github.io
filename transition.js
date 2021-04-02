$(document).ready(function() {
    setTimeout(function() {
        document.querySelector(".transition").classList.remove("is-active");
    }, 500);

    const anchors = $("a");

    for(let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("click", function(event) {
          event.preventDefault();
          
          document.querySelector(".transition").classList.add("is-active");
          setTimeout(function() {
            window.location.href = event.target.href;
          }, 500);
        });
    }
});