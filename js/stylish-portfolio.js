



$(document).ready(function() {
    (function($) {
        "use strict"; // Start of use strict
      
        // Closes the sidebar menu
        $(".menu-toggle").click(function(e) {
          e.preventDefault();
          $("#sidebar-wrapper").toggleClass("active");
          $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
          $(this).toggleClass("active");
        });
      
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });
      
        // Closes responsive menu when a scroll trigger link is clicked
        $('#sidebar-wrapper .js-scroll-trigger').click(function() {
          $("#sidebar-wrapper").removeClass("active");
          $(".menu-toggle").removeClass("active");
          $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        });
      
        // Scroll to top button appear
        $(document).scroll(function() {
          var scrollDistance = $(this).scrollTop();
          if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
          } else {
            $('.scroll-to-top').fadeOut();
          }
        });
      
      })(jQuery); // End of use strict


    var h1 = $('div#typedtext');

    h1.hide().contents().each(function() {
        var words;
        if (this.nodeType === 3) {
            words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
            $(this).replaceWith(words);
        } else if (this.nodeType === 1) {
            this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
        }
    });
    
    h1.find('span').hide().each(function() {
        if( !$.trim(this.innerHTML) ) {
            $(this).remove();
        }
    });
    
    h1.show().find('span').each(function(i) {
        $(this).delay(200 * i).fadeIn(0);
    });

    
    
});







// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);
