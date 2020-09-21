$(function () {
    $('.header__slider').slick({
       infinite: true,
        speed: 500,
        fade: true,
        prevArrow: `<img src="../img/arrowLeft.svg" class="leftArrow">`,
        nextArrow: `<img src="../img/arrowNext.svg" class="nextArrow">`,
        asNavFor: '.header__locationSlider'
    });

    $('.header__locationSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true
});


});