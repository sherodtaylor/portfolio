$(document).ready(function(){
  $('.post').find('.description').hide();
  $('.post').hover(
    function () {
      $(this).find('.description').slideDown();
      $(this).find('.icon img').fadeIn();
    },
    function () {
      $(this).find('.description').slideUp();
      $(this).find('.icon img').fadeOut();
    }
  );
});
