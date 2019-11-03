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
});
