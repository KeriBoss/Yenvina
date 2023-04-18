$('.header-top .menu-bar').on('click', function () {
    $(this).toggleClass('active').focus();
  });

$("#menuBar").on('focusout',function() {
    // Hide the menus
    $("header .nav-bar").removeClass('active');
});