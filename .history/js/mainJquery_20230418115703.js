$('.header-top .menu-bar').on('click', function () {
    $('#menuBar').toggleClass('active').focus();
  });


$(document).mouseup(function (e) {
    if ($(e.target).closest("#menuBar").length === 0) {
        $("#menuBar").removeClass('active');
    }
});
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#flash-splide', {
		perPage    : 4,
        width : 'auto',
		height: 'auto',
        gap: 20,
        breakpoints: {
            992: {
                perPage: 2,
            },
            640: {
                perPage: 2,
            },
            640: {
                perPage: 2,
            },
      }
  } ).mount();
  } );