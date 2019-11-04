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
                scrollTop: $(".home-profile").offset().top - 130},
            'slow');
    });

    $(".home-about-lead").click(function() {
        $('html,body').animate({
                scrollTop: $(".home-profile").offset().top - 130},
            'slow');
    });

    tippy('#react-icon', {
        content: '<u>Company</u>: The Hospital for SickKids <br><li>React Native Push Notifications</li><li>React Native + Expo Demo</li><li>React Google Search List</li><li>AWS FeathersJS</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#angular-icon', {
        content: '<u>Company</u>: HealthIM <br><li>HealthIM Analytics</li><li>HealthIM Desktop</li><li>Angular Weather</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#vue-icon', {
        content: '<li>VueJS + Chatkit</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#d3-icon', {
        content: '<u>Company</u>: HealthIM <br><li>HealthIM Analytics</li><li>Brantford Police Service<br>Analytics</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#svelte-icon', {
        content: '<li>Svelte Notes</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#rails-icon', {
        content: '<u>Company</u>: HealthIM <br><li>HealthIM Analytics</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#node-icon', {
        content: '<u>Company</u>: The Hospital For SickKids<br><li>AWS FeathersJS</li><li>React Google Search List</li><li>React Movies</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#feathers-icon', {
        content: '<u>Company</u>: The Hospital For SickKids<br><li>AWS FeathersJS</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });

    tippy('#flask-icon', {
        content: '<li>Flask + TensorFlowJS<br>MNIST Number Detector</li>',
        placement: 'bottom',
        arrow:true,
        fontFamily: 'Montserrat, sans-serif'
    });
});
