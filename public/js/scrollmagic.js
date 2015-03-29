var controller = new ScrollMagic.Controller();

  var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

  var scene = new ScrollMagic.Scene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
          .setTween(tween)
          .addTo(controller);

  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  });

  $(document).on("click", "a[href^=#]", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();

      controller.scrollTo(id);

      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });
