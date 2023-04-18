$('.header-top .menu-bar').on('click', function () {
    $('#menuBar').toggleClass('active').focus();
  });

$("#menuBar").on('focusout',function() {
    // Hide the menus
    // $("#menuBar").removeClass('active');
});
$(document).mouseup(function(e) {
    if ($(e.target).closest(".container").length === 0) {
        // rest code here
    }
};