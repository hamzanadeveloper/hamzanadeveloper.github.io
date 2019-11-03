$(document).ready(function () {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".header-index").addClass("active");
        }
        else {
            $(".header-index").removeClass("active");
        }
    });

    $(".pointer-home").click(function() {
        $('html,body').animate({
                scrollTop: $(".home-profile").offset().top},
            'slow');
    });

    $(".home-about-lead").click(function() {
        $('html,body').animate({
                scrollTop: $(".home-profile").offset().top},
            'slow');
    });
});
