$(document).ready(function(){
  /* tab contents */
  $(document).on('click', '.tab_cont_menu > li', function(){
    var tabCont = $(this).attr('data-tab');

    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.tab_contents').find('.tab_cont').removeClass('active');
    $('#'+tabCont).addClass('active');
  });

  // tab menu slide
  $('.tab_cont_menu.active_slide > li').each(function(){
    var $mark = $(this).parents('.tab_cont_menu_wrap').find('.mark');
    $(this).click(function(){
      var tabSlideActive = $(this).position().left;
      $mark.css('left',tabSlideActive);
    });
  });
  /* tab contents : end */
});