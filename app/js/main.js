$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');      
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');      
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');      
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact-slider__wraper').slick({
        items: 10,
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="icons/back.svg"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="icons/next.svg"></button>',
        autoplay: true
    });

    $( window ).on('resize', function() {
        if ($(window).width() <= '650'){
            $('.works-path__item--measurements').appendTo('.works-path__items-box');
        } else {
            $('.works-path__item--measurements').prependTo('.works-path__items-box2');
        }
    });
  /*   if ($(window).width() <= 650){
        $('.works-path__item--measurements').appendTo('.works-path__items-box');
    };
    if ($(window).width() > 651){
        $('.works-path__item--measurements').prependTo('.works-path__items-box2');
    }; */

    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
});