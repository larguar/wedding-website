// Initialize AOS

AOS.init();

// Parallax effect on header image

var $parallaxElement = $('.parallax-bg');
var elementHeight = $parallaxElement.outerHeight();

function parallax() {
 
  var scrollPos = $(window).scrollTop();
  var transformValue = scrollPos/40;
  var opacityValue =  1 - ( scrollPos / 2000);
  var blurValue = Math.min(scrollPos / 100, 20);
  
  if ( scrollPos < elementHeight ) {
  
    $parallaxElement.css({
      'transform': 'translate3d(0, -' + transformValue + '%, 0)',
      'opacity': opacityValue,
      '-webkit-filter' : 'blur('+blurValue+'px)'
    });
    
  }
  
}

$(window).scroll(function() {
  parallax();
});	

// Header content opacity fade on scroll

$(window).scroll(function(){
    $(".header-content").css("opacity", 1 - $(window).scrollTop() / 240);
  });
  
// Menu open and close

$(".menu").click(function(){
  event.preventDefault();
  $("#menu").toggle();
});

$(".close-menu").click(function(){
  event.preventDefault();
  $("#menu").toggle();
});

// Add class to menu link to change color on scroll

$(function(){
	if($('body').is('.home')){
    	$(window).scroll(function() {    
    		var scroll = $(window).scrollTop();

    		if (scroll >= 750) {
				$("a.menu").addClass("dark");
    		} else {
				$("a.menu").removeClass("dark");
    		}
		});
  	} else {
    	$(window).scroll(function() {    
    		var scroll = $(window).scrollTop();

    		if (scroll >= 450) {
				$("a.menu").addClass("dark");
    		} else {
        		$("a.menu").removeClass("dark");
    		}
		});
	}
});

// Add class to header to disappear after scrolling past it

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 800) {
        $("#header").addClass("d-none");
    } else {
        $("#header").removeClass("d-none");
    }
});

// Fix map to disable scroll zoom

$(document).ready(function () {
        $('#map').addClass('scrolloff'); // set the mouse events to none when doc is ready
        
        $('.overlay').on("mouseup",function(){ // lock it when mouse up
            $('#map').addClass('scrolloff'); 
            //somehow the mouseup event doesn't get call...
        });
        $('.overlay').on("mousedown",function(){ // when mouse down, set the mouse events free
            $('#map').removeClass('scrolloff');
        });
        $("#map").mouseleave(function () { // becuase the mouse up doesn't work... 
            $('#map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
             // or you can do it on some other event
        });
        
    });