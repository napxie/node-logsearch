//全局对象,不扩展JQ是为考虑移值，保持最小集
var ts = {} || ts;
ts.ui = {
    active: function(selector, className)  {
        $(selector).addClass(className);
        $(selector).siblings().removeClass(className);
    }
}

//jquery的hover方法的延迟方法
$.fn.lazyhover = function (fuc_on, fuc_out, de_on, de_out) {
    var self = $(this);
    var flag = 1;
    var h;
    var handle = function (elm) {
        clearTimeout(h);
        if (!flag)
            self.removeData('timer');
        return flag ? fuc_on.apply(elm) : fuc_out.apply(elm);
    };
    var time_on = de_on || 0;
    var time_out = de_out || 500;
    var timer = function (elm) {
        h && clearTimeout(h);
        h = setTimeout(function () {
            handle(elm);
        }, flag ? time_on : time_out);
        self.data('timer', h);
    };
    self.hover(function (event) {
        event.stopPropagation();
        event.preventDefault();
        flag = 1;
        this.event = event;
        timer(this);
    }, function (event) {
        event.stopPropagation();
        event.preventDefault();
        flag = 0;
        this.event = event;
        timer(this);
    });
};

