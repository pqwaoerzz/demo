/*JavaScript function*/

$.extend({
    /*
     *  滚动条滚动时返回值,滚动触发
     * */
    scrollShow: function (ele, fix) {
        // 默认值
        if (!fix) {
            fix = 0;
        }
        if ($(window).scrollTop() + Math.abs($(window).height() - $(ele).height()) >= $(ele).offset().top - fix) {
            return true;
        }
    },
    /*
    * sHover
    * */
    sHover : function(){
        var obj = new sHover("sHover", "mask");
        obj.set({
            speed: 7
        });
    },
    /*
     * 点击栏目切换
     * tab          导航
     * wrapper      容器
     * event        事件
     * speed        切换速度
     * */
    toggleDiv: function (tab, wrapper, event, speed) {
        var showSpeed = isNaN(speed) ? 0 : speed;
        $(wrapper).each(function (index) {
            $(this).attr("index", index);
        });
        $(tab).each(function (index) {
            $(this).bind(event, function () {
                $(tab).removeClass("now");
                $(this).addClass("now");
                $(wrapper + "[index ='" + index + "']").fadeIn(showSpeed);
                $(wrapper + "[index !='" + index + "']").hide();
            });
        });
    },
    toggleDiv2: function (tab, wrapper, event, speed) {
        var showSpeed = isNaN(speed) ? 0 : speed;
        $(wrapper).each(function (index) {
            $(this).attr("index", index);
        });
        $(tab).each(function (index) {
            $(this).bind(event, function () {
                $(tab).removeClass("now");
                $(this).addClass("now");
                $(wrapper + "[index ='" + index + "']").fadeIn(showSpeed).find(".boxer").addClass("now");
                $(wrapper + "[index !='" + index + "']").hide();
            });
        });
    },
    /*
     * 延迟调用
     * */
    delayChange : function (ele) {
        $(ele).each(function (index) {
            index += 1;
            $(this).css("transition-delay", index * 0.1 + "s", "-webkit-transition-delay", index * 0.1 + "s");
        });
    }
});


