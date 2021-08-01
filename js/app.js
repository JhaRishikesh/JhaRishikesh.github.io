/* Template Name: Engno - Bootstrap 4 Landing Personal Page Tamplat
   Author: Zoyothemes
   File Description: Main JS file of the template
*/


! function($) {
    "use strict";

    var Engno = function() {};

    // Preloader
    Engno.prototype.initPreloader = function() {
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });
    },

    // Menu Sticky Menu
    Engno.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    // Menu Sticky Menu
    Engno.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    // Scrollspy
    Engno.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    },

    // BACK TO TOP
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 
    
    $('.back-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });

    // MagnificPopup
    Engno.prototype.initMagnificPopup = function() {
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },
    
    // OwlCarousel
    Engno.prototype.initOwlCarousel = function() {
        $("#clients-testi").owlCarousel({
            autoPlay: 3000,
            items: 1,
            itemsDesktop : [1024,1],
            itemsDesktopSmall : [900,1],
            itemsTablet: [600,1],
        });
    },


    Engno.prototype.initWaveImage  = function() {
        $("#wave_img").length && $("#wave_img").wavify({
            height: 100,
            bones: 3,
            amplitude: 50,
            color: "#fff",
            speed: .25
        });
    },

    Engno.prototype.initFeatherIcon  = function() {
        feather.replace()
    },

    Engno.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initMagnificPopup();
        this.initOwlCarousel();
        this.initWaveImage();
        this.initFeatherIcon();
        this.initPreloader();
    },
    //init
    $.Engno = new Engno, $.Engno.Constructor = Engno
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Engno.init();
}(window.jQuery);