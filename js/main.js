$(document).ready(function() {
  
  //mmenu
  $("#mmenu").mmenu({
     offCanvas: {
        position: "right",
     }
  });
      
      
  //scroll
  $('body').waypoint(function(direction) {
    if (direction === 'down') {
      $('body').addClass('scrolled');
    }
    else {
      $('body').removeClass('scrolled');
    }
  }, 
  { 
    offset: -30 
  });
  
  
  
  //services
  $('.service.host-deploy figure').waypoint(function() {
    $('.service.host-deploy figure img').addClass('bounceInLeft animated');
  },
  { offset: 'bottom-in-view' });
  
  $('.service.custom-development figure').waypoint(function() {
    $('.service.custom-development figure img').addClass('rotateIn animated');
  },
  { offset: 'bottom-in-view' });
  
  $('.service.ckan-ex figure').waypoint(function() {
    $('.service.ckan-ex figure img').addClass('lightSpeedIn animated');
  },
  { offset: 'bottom-in-view' });
  
  $('.service.training figure').waypoint(function() {
    $('.service.training figure img').addClass('bounce animated');
  },
  { offset: 'bottom-in-view' });
  
  
  //Stellar
  $.stellar({
    horizontalScrolling: false,
    hideDistantElements: false,
  });

  
  //smooth scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top -80
          }, 1000);
          return false;
        }
      }
    });
  });
  
  
  //external links 
  $(function() { 
    $('a[rel*=external]').click( function() {
      window.open(this.href);
      return false;
    });
  });
  
  //home
  
  //slick
  $('.home .people').slick({
	  //autoplay: true,
    arrows: false,
    draggable: false
	});
  
  $('body').waypoint(function(direction) {
    if (direction === 'down') {
      $('.home .people').slickPause();
      $('.banner').addClass('dim');
    }
    else {
      //$('.home .people').slickPlay();
      $('.banner').removeClass('dim');
    }
  }, 
  { 
    offset: -30 
  });
  
  
  //banner
  $('.banner').waypoint(function(direction) {
    if (direction === 'down') {
      $('.home .ckan').addClass('hidden');
    }
    else {
      $('.home .ckan').removeClass('hidden fade');
    }
  }, 
  { 
    offset: -400 
  });
  $('.banner').waypoint(function(direction) {
    if (direction === 'down') {
      $('.home .ckan').addClass('fade');
      $('.banner .action').addClass('fade');
    }
    else {
      $('.home .ckan').removeClass('fade');
      $('.banner .action').removeClass('fade');
    }
  }, 
  { 
    offset: -250 
  });
  
  
  $('.home .case-studies .wrapper').slick({
	  infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    slide: 'li',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
	});
  
  
  //features
  $('.feature figure').waypoint(function() {
    jQuery(this).find('img').addClass('animated');
  },
  { offset: 'bottom-in-view' });
  
  //action
  $('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parents('.action').find('aside').slideToggle('fast'); 

    jQuery(this).parents('.action').toggleClass('js-expanded');
    e.preventDefault();
  });
  
  
  //training
  $('.service.data-training figure').waypoint(function() {
    $('.service.data-training figure img').addClass('bounceInLeft animated');
  },
  { offset: 'bottom-in-view' });
  
  $('.service.technical-training figure').waypoint(function() {
    $('.service.technical-training figure img').addClass('rotateIn animated');
  },
  { offset: 'bottom-in-view' });
  
  $('div.training .js-accordion-trigger').bind('click', function(e){
    jQuery(this).parents('section').find('aside').slideToggle('fast'); 
    e.preventDefault();
  });
  
  
  //hosting
  $('.feature.setup figure').waypoint(function() {
    $('.feature.setup figure img.screen').addClass('zoomIn');
  },
  { offset: 'bottom-in-view' });
  
  $('.feature.uptime figure').waypoint(function() {
    $('.feature.uptime figure img.tick').addClass('flip');
  },
  { offset: 'bottom-in-view' });
  
  
  //development
  $('.feature.extensions figure').waypoint(function() {
    $('.feature.extensions figure img.pin').addClass('bounceInDown');
  },
  { offset: 'bottom-in-view' });
  
  $('.feature.integration figure').waypoint(function() {
    $('.feature.integration figure img').addClass('flipInX');
  },
  { offset: 'bottom-in-view' });
  
   $('.feature.schemas figure').waypoint(function() {
    $('.feature.schemas figure img.field-2').addClass('bounceInRight');
  },
  { offset: 'bottom-in-view' });
});
