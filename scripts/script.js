// window.filterizr = new window.Filterizr(".filter-container", {});

$(document).ready(function() {
  var options = {};

  $(".hero-owl").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false
  });

  $(".latest__owl").owlCarousel({
    margin: 25,
    dots: false,
    nav: true,
    responsive: {
      0: {
        nav: false,
        items: 1,
        margin: 50
      },
      768: {
        nav: false,
        items: 2
      },
      993: {
        items: 3
      },
      1201: {
        items: 4
      }
    }
  });

  $(".filter-container").filterizr;
});

$(".icons__like--effect").on("click", function() {
  var like = $(".like");

  console.log(like.data("like"));
  if (like.data("like") === true) {
    like.addClass("liked");
    like.data("like", "false");
  }
  if (like.data("like") == false) {
    like.removeClass("liked");
    like.removeData("like");
    like.data("like", "true");
  }
});
