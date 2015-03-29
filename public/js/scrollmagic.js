var controller = new ScrollMagic.Controller();

  var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

  var scene = new ScrollMagic.Scene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
          .setTween(tween)
          .addTo(controller);

  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  });

  //  bind scroll to anchor links
  $(document).on("click", "a[href^=#]", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();

      // trigger scroll
      controller.scrollTo(id);

        // if supported by the browser we can even update the URL.
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });
