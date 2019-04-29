$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".header-black").addClass("active");
    }
    else {
        $(".header-black").removeClass("active");
    }
});