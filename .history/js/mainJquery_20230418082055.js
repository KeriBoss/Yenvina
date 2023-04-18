$('.header-top .menu-bar').on('click', function () {
    $(this.hash).toggleClass('active').focus();
  });

$("#menuBar").on('focusout',function() {
    // Hide the menus
    $("header .nav-bar").removeClass('active');
});