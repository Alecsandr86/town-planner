//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

  var $object = $('.asid-menu');
  var $clssOb = 'fixed';
  var obHeight = $object.offset().top;

  $(this).scroll(function(e){
    if($(this).scrollTop() > obHeight){
      $object.addClass($clssOb);
    }else {
      $object.removeClass($clssOb);
    }
  });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };




    // ionRangeSlider

    $("#slid-1").ionRangeSlider({
      type: "double",
       min: 2200,
       max: 10000,
       from: 2200,
       to: 5600,
       hide_min_max: true,
    });
    $("#slid-2").ionRangeSlider({
      type: "double",
       min: 20,
       max: 100,
       from: 20,
       to: 60,
       hide_min_max: true,
    });

    // \ionRangeSlider\

    // bxSlider
    $('.slid-advanteges').bxSlider({
      controls: false,
    });
    // \bxSlider\



    // formstyler

    setTimeout(function() {
      $('input, select').styler();
    }, 100);

    // \formstyler\





});
