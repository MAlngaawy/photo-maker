$(function(){
  'use strict';

  $(".navbar-nav li").each(function(){

    $(this).click(function(){

      $(this).addClass("active").siblings().removeClass("active");

      $(".navbar-toggler").addClass('collapsed').attr('aria-expanded', "false");

      $(".navbar-collapse").removeClass('show');

      $(".intro").addClass("none");

      $($(this).attr('data-section')).addClass("animated zoomInDown").removeClass("none").siblings().addClass("none")

    })
    
  })

})

