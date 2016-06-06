//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

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



    // скрол меню на главной
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
    // скрол меню на главной

});
