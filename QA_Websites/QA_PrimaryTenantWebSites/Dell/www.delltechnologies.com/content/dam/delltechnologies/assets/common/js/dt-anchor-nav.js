// JavaScript Document

///////////////////////////////////////////
//  CONFIG
///////////////////////////////////////////


///////////////////////////////////////////
//  GLOBALS
///////////////////////////////////////////


///////////////////////////////////////////
//  MAIN
///////////////////////////////////////////

var dtc = dtc || {};



/* Utilities
========================================================================== */
dtc.utils = {

    init: function() {

        dtc.utils.setupBreakpoints(); 
        
        if (jQuery('.match-height').length > 0) {
            jQuery('.match-height').matchHeight();
        }
        if (jQuery('.social-block').length > 0) {
            jQuery('.social-block').matchHeight();
        }
        
    },
        
    setupBreakpoints: function () {
        jQuery('body').append('<div class="device-xs visible-xs"></div><div class="device-sm visible-sm"></div><div class="device-md visible-md"></div><div class="device-lg visible-lg"></div>');
    },
    
    isBreakpoint: function ( alias ) {
        return jQuery('.device-' + alias).is(':visible');
    },


};


    dtc.spd = {

    init: function() {

        dtc.spd.subNav();

        if (jQuery("body").width() > 979) {
            // init controller
            var controller = new ScrollMagic.Controller();

            // build scene 1
            var scene = new ScrollMagic.Scene({triggerElement: "#overview", duration: 500, triggerHook: 'onLeave', offset: -300})
            .addTo(controller)
            //.addIndicators() // add indicators (requires plugin)

            .on("enter", function () {
                
                console.log('ScrollMagi Overview');
                jQuery('.dt-anchor-nav-menu > li').removeClass('active');
                jQuery('#anchor-overview').addClass('active');
              
            })

            // build scene 1
            var scene = new ScrollMagic.Scene({triggerElement: "#edge", duration: 500, triggerHook: 'onLeave', offset: -300})
            .addTo(controller)
            //.addIndicators() // add indicators (requires plugin)

            .on("enter", function () {
                
                console.log('ScrollMagic Edge');
                jQuery('.dt-anchor-nav-menu > li').removeClass('active');
                jQuery('#anchor-edge').addClass('active');
              
            })

            // build scene 1
            var scene = new ScrollMagic.Scene({triggerElement: "#fiveG", duration: 500, triggerHook: 'onLeave', offset: -300})
            .addTo(controller)
            //.addIndicators() // add indicators (requires plugin)

            .on("enter", function () {
                
                console.log('ScrollMagic 5g');
                jQuery('.dt-anchor-nav-menu > li').removeClass('active');
                jQuery('#anchor-fiveG').addClass('active');
              
            })

            // build scene 1
            var scene = new ScrollMagic.Scene({triggerElement: "#ai", duration: 500, triggerHook: 'onLeave', offset: -300})
            .addTo(controller)
            //.addIndicators() // add indicators (requires plugin)

            .on("enter", function () {
                
                console.log('ScrollMagic AI');
                jQuery('.dt-anchor-nav-menu > li').removeClass('active');
                jQuery('#anchor-ai').addClass('active');
              
            })

            // build scene 1
            var scene = new ScrollMagic.Scene({triggerElement: "#data-management", duration: 500, triggerHook: 'onLeave', offset: -300})
            .addTo(controller)
            //.addIndicators() // add indicators (requires plugin)

            .on("enter", function () {
                
                console.log('ScrollMagic Data Management');
                jQuery('.dt-anchor-nav-menu > li').removeClass('active');
                jQuery('#anchor-data-management').addClass('active');
              
            })

            // build scene 1
            var scene = new ScrollMagic.Scene({triggerElement: "#security", duration: 500, triggerHook: 'onLeave', offset: -300})
            .addTo(controller)
            //.addIndicators() // add indicators (requires plugin)

            .on("enter", function () {
                
                console.log('ScrollMagic security');
                jQuery('.dt-anchor-nav-menu > li').removeClass('active');
                jQuery('#anchor-security').addClass('active');
              
            })
        }

        
    },

    subNav: function (){
        
        jQuery( window ).scroll(function() {
            if(jQuery( window ).scrollTop() > 334){
                //jQuery('.navigation-top').addClass('darkNav');
                jQuery('#dt-anchor-nav').addClass('dt-anchor-nav-fixed');
                jQuery('#overview').css('padding-top','48px');
            } else {
                jQuery('#dt-anchor-nav').removeClass('dt-anchor-nav-fixed');
                jQuery('#overview').css('padding-top','0');
            }
        });

        jQuery( ".expand-mobile-menu" ).click(function() {
            jQuery( ".dt-anchor-nav-menu").toggleClass('visible');
            jQuery(this).toggleClass('expanded');
        });

        /*jQuery(".dt-anchor-nav-link").click(function(e) {
            e.preventDefault();
            var aid = jQuery(this).attr("href");
            console.log('Anchor: '+aid);
            jQuery('html,body').animate({scrollTop: jQuery(aid).offset().top},'slow');
        });*/

        jQuery(".click-box").click(function() {
         window.location = jQuery(this).find("a").attr("href");
         return false;
         console.log(jQuery(this).find("a").attr("href"));
        });
    }

};


/* Init functions
========================================================================== */
dtc.startup = {

    init: function() {
        
        dtc.utils.init();
        dtc.spd.init();
    }
};

jQuery(document).ready(dtc.startup.init); // Ready event
