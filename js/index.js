var swiper = new Swiper('.mySwiper', {
    
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  });
  var o = new Swiper('.seasonSwiper', {
    loop: true,
    slidesPerView:3,
    centeredSlides: false,
    spaceBetween: 50,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    speed: 5000,
    breakpoints: {
      375: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      900: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
        preloadImages: !1,
        lazy: {
          loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
          loadPrevNextAmount: 4 //or, if you wish, preload the next 2 images
        },
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



const upload = document.querySelector(".upload");
  upload.addEventListener("click", (function() {
        document.querySelectorAll(".wristwatch").forEach((i=>{
            i.style.display = "grid"
        }
        )),
        upload.remove()
    }
    ))