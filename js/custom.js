$(function(){
  'use strict';

  $(".navbar-nav li").each(function(){

    $(this).click(function(){

      $(this).addClass("active").siblings().removeClass("active");

      $(".navbar-toggler").addClass('collapsed').attr('aria-expanded', "false");

      $(".navbar-collapse").removeClass('show');

      $(".intro").addClass("none");

      $($(this).attr('data-section')).addClass("animated flipInX").removeClass("none").siblings().addClass("none")
      
      if(!$(".connect").hasClass('none')) {
        $("body").css({
          "background-color":"#2b2728",
          "border-color": "#f3f2ed",
          })

          $(".navbar-nav li a").each(function() {
            $(this).addClass("use-connect")
          })

          $(".footer .links").removeClass("none")

      } else {
        $("body").css({
          "background-color": "#f3f2ed",
          "border-color": "#ffde16"
        })

        $(".footer .links").addClass("none")

        $(".navbar-nav li a").each(function() {
          $(this).removeClass("use-connect")
        })
      }

    })
    
  })


})

