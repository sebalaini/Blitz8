$(document).ready(function(){

  /***************
  MENU BTN
  ***************/

  // fade effect on click
  $("#menu").click(function() {
    $( ".nav" ).fadeToggle("slow", "linear");
  });

  // hamburger interactivity
  (function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    };

    // hidden nav on click
    if ($(window).width() < 768) {
      $(".link").click(function(){
      $(".nav").fadeToggle("slow", "linear");
      $("#menu").removeClass("is-active");
    });
  };

  })();

  /***************
  A NAV CHANGE COLOR
  ***************/

  var contentSections = $('.section');

  updateNavigation();
  $(window).on('scroll', function() {
    updateNavigation();
  });

  function updateNavigation() {

  contentSections.each(function() {
    $this = $(this);
    var activeSection = $('.nav a[href="#' + $this.attr("id") + '"]');
    var scrollPosition = $(window).scrollTop();
    var midWindowLocation = $(window).height() / 2;
    var sectionLocationTop = $this.offset().top;
    var sectionHeight = $this.height();

  //the section location tells us how many pixels separate the top of the section element from the top of the document
  //the scrollPostion tells us the amount of pixels scrolled down, relative to the top of the window, or the area "above" the window
  //if the top of our section element was flush with the top of the window, these two values would be equal
  //the if statement first subtracts the distance to the middle of the window to offset this, meaning the first portion of the if statement returns true if the top of the section element is flush with the middle of the window, rather than the top of it

  //the second part of the if does the same for below the element

    if ( (sectionLocationTop - midWindowLocation < scrollPosition) && (sectionLocationTop + sectionHeight - midWindowLocation > scrollPosition)) {
      activeSection.addClass('selected');
    }
    else {
      activeSection.removeClass('selected');
    }

    });
  };

  /***************
  SWITCH CLASS FOR NAV  - CENTER TO TOP FIX
  ***************/

  centerToFixed();
  $(window).on('scroll', function() {
    centerToFixed();
  });

  function centerToFixed() {

    if ($(window).width() >= 768) {

      if ($(window).scrollTop() > 320) {
        $(".nav_wrapper_outside").removeClass("nav_wrapper_outside_center");
        $(".nav").removeClass("nav_center");
        $(".logo").removeClass("logo_center");
      }
      else {
        $(".nav_wrapper_outside").addClass("nav_wrapper_outside_center");
        $(".nav").addClass("nav_center");
        $(".logo").addClass("logo_center");
      }
    };
  };

  /***************
  SMOOTH EFFECT
  ***************/

  $('a[href*="#"]').click(function(event) {
      if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1200, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus();
              };
          });
        }
      }
    });

  /***************
  FOOTER
  ***************/

  var date = new Date();
  var year = date.getFullYear();

  $(".year").html(year);
});
