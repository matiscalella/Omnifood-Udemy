$(document).ready(function() {
    
/*----------------------- Sticky navigation -----------------------*/
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
/*------------------------ Scroll Buttons ------------------------*/
    
    /* "I'm Hungry" Button */
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    /* "Show Me More" Button */
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });

/*-------------------- Scroll Navigation Bar --------------------*/
    
    /* Descargado desde: https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
/*-------------------- Animations on scroll --------------------*/
    
    /* Waypoint 1 */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /* Waypoint 2 */
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    /* Waypoint 3 */
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /* Waypoint 4 */
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
/*---------------------- Mobile NavBar ----------------------*/
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav'); /*declaro la variable que almacena el main-nav que está oculto */
        let icon = $('.js--nav-icon i') /* declaro una variable que contiene al icon */
        nav.slideToggle(200); /* la funcion slideToggle recibe un parametro en milisegundos para la animacion */
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }  
        
    })
    
});