//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

      // fancybox
          $(".fancybox").fancybox();

      // \fancybox\



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
      $("#slid-3").ionRangeSlider({
        type: "double",
         min: 0,
         max: 100,
         from: 25,
         to: 65,
         hide_min_max: true,
      });
      $("#slid-4").ionRangeSlider({
        type: "double",
         min: 0,
         max: 100,
         from: 25,
         to: 65,
         hide_min_max: true,
      });
      $("#slid-5").ionRangeSlider({
        type: "double",
         min: 0,
         max: 100,
         from: 25,
         to: 65,
         hide_min_max: true,
      });
      $("#slid-6").ionRangeSlider({
        type: "double",
         min: 0,
         max: 100,
         from: 25,
         to: 65,
         hide_min_max: true,
      });

      // \ionRangeSlider\

    var $heigthElement = $('.objects-cont').height();

    $('.butt-show-more').on('click', function(){
      $(this).hide(500).prev('.show-more').animate({
          'height': $heigthElement,
      },700);
    });

    $('.butt-nav').on('click', function(){
      $(this).next('ul').slideToggle(500);
    });
    $('.butt-mob-nav').on('click', function(){
      $(this).parent('.phon-tel-mob').next('.mobail-nav-header').slideToggle(500);
    });

    $('.but-nav-footer').on('click', function(){
      $(this).nextAll('.header-nav').slideToggle(500);

      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top},1000,'linear');
      return false;

    });


    $('.clok-menu').on('click', function(){
      $(this).parents('.asid-menu').animate({'left':'-281px'},1000)
        .prev('.nav-bg-two').animate({'left':'-281px'},1000)
        .parents('.nav-asid-two').animate({'left':'-281px'},1000);
    });


    $('.find-partment a').on('click',function(){
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
        $('.poist-menu').addClass('active').animate({'left':'0'},700).find('.nav-bg ,.asid-menu').animate({'left':'0'},700);
      }else{
        $('.poist-menu').removeClass('active').animate({'left':'-300px'},700).find('.nav-bg ,.asid-menu').animate({'left':'-300px'},700);
      }


    });



    // /*******************************
    //  *   ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
    //  *******************************/
    // $('a[href^="#h"]').click(function(){
    //     var target = $(this).attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(target).offset().top},2000,"easeInOutExpo");
    //     return false;
    // });
    //
    // /*******************************
    //  *   \ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ\
    //  *******************************/


    // bxSlider
    $('.slid-advanteges').bxSlider({
      controls: false,
    });

    $('.big-img').bxSlider({
        pagerCustom: '#pagesgallery',
        controls: false,
    });
    // \bxSlider\



    // formstyler

    setTimeout(function() {
      $('input, select').styler();
    }, 100);

    // \formstyler\

    // mCustomScrollbar
    $('.apartments').mCustomScrollbar();
    // \mCustomScrollbar\


});


$(document).ready(function(){
  // скрол меню на главной
  var $object = $('.asid-menu');
  var $obtwo =$('.find-partment');
  var $clssOb = 'fixed';

  var obHeight = $object.offset();
  var obHeight = $object.offset();

  $(this).on('scroll', function(){

    if($(this).scrollTop() > obHeight.top){
      $object.addClass($clssOb).prev('.nav-bg').addClass($clssOb);
    }else {
      $object.removeClass($clssOb).prev('.nav-bg').removeClass($clssOb);
    };

    if($(this).scrollTop() > obHeight.top){
      $obtwo.addClass($clssOb);
    }else {
      $obtwo.removeClass($clssOb);
    };

  });

  // скрол меню на главной
});
