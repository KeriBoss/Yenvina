$('.header-top .menu-bar').on('click', function () {
    $('#menuBar').toggleClass('active').focus();
  });


$(document).mouseup(function (e) {
    if ($(e.target).closest("#menuBar").length === 0) {
        $("#menuBar").hide();
    }
});