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
    new Splide('#product-splide', {
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

//Slider for Detail page
var splide = new Splide("#main-slider", {
    width: 550,
    height: 500,
    pagination: false,
    cover: true
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
        splide.go(index);
    });
}

splide.on("mounted move", function () {
    var thumbnail = thumbnails[splide.index];

    if (thumbnail) {
        if (current) {
            current.classList.remove("is-active");
        }

        thumbnail.classList.add("is-active");
        current = thumbnail;
    }
});

splide.mount();


$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })