$(function () {
    $('.all_contents').hide();
    $('.intro .text p').t();

    setTimeout(function () {
        $('.intro').fadeOut(1000);
    }, 5500);

    setTimeout(function () {
        $('.all_contents').fadeIn(1000);
    }, 6500);

    setTimeout(function () {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            dots: true,
            speed: 1000,
            fade: true,
            arrows: false,
            pauseOnHover: true
        });
    }, 6500);

    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('open');
        $('.nav li').t();
    });

    $('.js_target').t();

    $('.item_grid').append('<li></li>');

    $(window).scroll(function () {
        if (3000 >= $(this).scrollTop()) {
            $('.sitemap li a').t();
        }
    });

});
