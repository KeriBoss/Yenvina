$('.header-top .menu-bar').on('click', function () {
    $('#menuBar').toggleClass('active').focus();
  });


$(document).mouseup(function (e) {
    if ($(e.target).closest("#menuBar").length === 0) {
        $("#menuBar").removeClass('active');
    }
});
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#carousel-about', {
		perPage    : 1,
        width : 'auto',
		height: 'auto',
  } ).mount();
  } );