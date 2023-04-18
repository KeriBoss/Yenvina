$("#menuBar").clickOutsideThisElement('focusout',function() {
    // Hide the menus
    $("header .nav-bar").removeClass('active');
});