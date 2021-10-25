/*$(function() {
    var header = $('.body-container');
    var backgrounds = new Array('url(image/8.8.jfif', 'url(image/9.9.jfif', 'url(image/10.10.png)');
    var current = 0;

    function nextBackground() {
        header.css('background', backgrounds[current = ++current % backgrounds.length]);
        setTimeout(nextBackground, 1000);
    }

    setTimeout(nextBackground, 1000);
    header.css('background', backgrounds[0]);
});*/
/*$(document).ready(function() {
    let slideCount = $('.slides .slide img').length;
    let slideWidth = $('.slides .slide img').width();
    let slideHeight = $('.slides .slide img').height();


    $('.slide').css({ width: slideWidth, height: slideHeight });

    function moveLeft() {
        $('.slide').animate({
            left: +slideWidth
        }, 200, function() {
            $('.slide img:last-child').prependTo('.slide');
            $('.slide').css('left', '');
        });
    };

    function moveRight() {
        $('.slide').animate({
            left: -slideWidth
        }, 200, function() {
            $('.slide img:last-child').prependTo('.slide');
            $('.slide').css('left', '');

        });

    };
    $('button #prev-btn').on('click', function() {
        moveLeft();
    })
    $('button #next-btn').on('click', function() {
        moveRight();
    })
});*/
$(document).ready(function() {

    $("#next-btn").click(function() {
        changeImage('next-btn');
    })
    $("#prev-btn").click(function() {
        changeImage('prev-btn')
    })

    function changeImage(type) {
        let imgSelectVisible = $('img.slide-item:visible');
        let imgVisible = parseInt(imgSelectVisible.attr('number'));
        let eqNumber = type === 'next-btn' ? imgVisible + 1 : imgVisible - 1;
        if (eqNumber >= $('.slide-item').length) {
            eqNumber = 0;
        }
        $('img.slide-item').eq(eqNumber).fadeIn(200);
        imgSelectVisible.fadeOut(150);
    }
    setInterval(function() {
        $("#next-btn").click();
    }, 2000);
})