(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    // $('.navbar-collapse ul li a').click(function() {
    //     /* always close responsive nav after click */
    //     $('.navbar-toggle:visible').click();
    // });

    // $('#galleryModal').on('show.bs.modal', function (e) {
    //    $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    // });
    //포트폴리오 사이트 링크걸기

    $('icon-lg.ion-ios-search').on('click',function(){
      location.href='F&B-010000.html';
      console.log('open');
    });


})(jQuery);
