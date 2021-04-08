$(document).ready(function() {
    setTimeout(function() {
        document.querySelector(".transition").classList.remove("is-active");
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

    /*const slider = document.querySelector("#handler");
    const preventClick = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    let isDown = false;
    let isDragged = false;
    let startX;
    let scrollLeft;

    if(slider) {
      slider.addEventListener("mousedown", e => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });

      slider.addEventListener("mouseup", (e) => {
        isDown = false;
        const elements = document.querySelectorAll("a");

        if(isDragged){
          for(let i = 0; i<elements.length; i++){
            elements[i].addEventListener("click", preventClick);
          }
        }
        else{
          for(let i = 0; i<elements.length; i++){
            elements[i].removeEventListener("click", preventClick);
          }
        }
        slider.classList.remove("active");
        isDragged =  false;
      });

      slider.addEventListener("mousemove", e => {
        if (!isDown) return;

        isDragged =  true;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    }*/
});