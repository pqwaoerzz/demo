//JavaScript


$(function () {
    // header show
    $("#header").addClass('show');
    // pages show
    $(".service1").addClass('show');

    //美化滚动条
    $("html").niceScroll({
        cursorcolor: "#111",
        cursorborder: "none",
        cursorwidth: "8px",
        scrollspeed: 80,
        background: "#aaa",
        cursoropacitymin: 0,
        cursoropacitymax: 0.7,
        enablekeyboard: false,
        zindex: 2
    });
    // 隐藏回到顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            //渐近
            $(".gotop").fadeIn();
        }
        else {
            //渐出
            $(".gotop").fadeOut();
        }
    });
    // 返回顶部
    $(".gotop").on('click', function () {
        // 浏览器内核
        /*var name = $.NV('name');
        if (name == 'chrome') {
            $("body").animate({scrollTop: 0}, 500 + $(window).scrollTop() * 0.5)
        } else {
            $("html").animate({scrollTop: 0}, 500 + $(window).scrollTop() * 0.5);
        }*/
        // 或者兼容写法
        $("body,html").animate({scrollTop: 0}, 500 + $(window).scrollTop() * 0.5);
    });
});


