/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#52b3d9',
                trackColor: '#eee',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: false

        }).init();

    }());

    // -------------------------------------------------------------
    // Popup JS
    // -------------------------------------------------------------

    $(function () {
        $('#popup01').click(function () {
            $('#pop01').show();
        });
        $('#popup02').click(function () {
            $('#pop02').show();
        });
        $('#popup03').click(function () {
            $('#pop03').show();
        });

        $('.popup i').click(function () {
            $('.popup').hide();
        });
    });

});

// 스와이퍼 js
var swiper = new Swiper(".sns_banner_swiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".slider_box1 .swiper-button-next",
        prevEl: ".slider_box1 .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".sns_banner_swiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".slider_box2 .swiper-button-next",
        prevEl: ".slider_box2 .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".sns_banner_swiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".slider_box3 .swiper-button-next",
        prevEl: ".slider_box3 .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});

// IOS 저전력모드일 때 동영상 재생 시키는 JS
$('body').on('click touchstart', function () {
    const videoElement = document.getElementsByTagName('video');
    if (videoElement.playing) {
        // video is already playing so do nothing
    }
    else {
        // video is not playing
        // so play video now
        videoElement.play();
    }
});