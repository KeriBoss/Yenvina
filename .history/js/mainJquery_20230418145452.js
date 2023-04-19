$('.header-top .menu-bar').on('click', function () {
    $('#menuBar').toggleClass('active').focus();
});


$(document).mouseup(function (e) {
    if ($(e.target).closest("#menuBar").length === 0) {
        $("#menuBar").removeClass('active');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#flash-splide', {
        perPage: 4,
        width: 'auto',
        height: 'auto',
        gap: 20,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            992: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        }
    }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.product-splide', {
        perPage: 4,
        width: 'auto',
        height: 'auto',
        gap: 20,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            992: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.newsletter-splide', {
        perPage: 3,
        width: 'auto',
        height: 'auto',
        gap: 20,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            992: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    }).mount();
});