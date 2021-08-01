/* Template Name: Rishikesh Jha Portfolio 
*/


! function($) {
    "use strict";

    var Rishi = function() {};

    // Preloader
    Rishi.prototype.initPreloader = function() {
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });
    },

    // Menu Sticky Menu
    Rishi.prototype.initStickyMenu = function() {
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
    Rishi.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    // Scrollspy
    Rishi.prototype.initScrollspy = function() {
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
    Rishi.prototype.initMagnificPopup = function() {
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
    Rishi.prototype.initOwlCarousel = function() {
        $("#clients-testi").owlCarousel({
            autoPlay: 3000,
            items: 1,
            itemsDesktop : [1024,1],
            itemsDesktopSmall : [900,1],
            itemsTablet: [600,1],
        });
    },


    Rishi.prototype.initWaveImage  = function() {
        $("#wave_img").length && $("#wave_img").wavify({
            height: 100,
            bones: 3,
            amplitude: 50,
            color: "#fff",
            speed: .25
        });
    },

    Rishi.prototype.initFeatherIcon  = function() {
        feather.replace()
    },

    Rishi.prototype.init = function() {
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
    $.Rishi = new Rishi, $.Rishi.Constructor = Rishi
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Rishi.init();
}(window.jQuery);