//数值录入插件$('input')numberBox('numberBox');.
//transclude tech v0.1
;
(function ($) {

    $.fn.numberBox = function (seed) {
        //变量放在DATA里
        var min = 0;
        var max = 9999;

        var template = '<div id={{id}} class="numberbox">' +
            '<a href="javascript:;" class="min"></a>' +
            '{{transclude}}' +
            '<a href="javascript:;" class="max"></a>' +
            '</div>';

        return this.each(function (index) {
            var origin = $(this);
            function transclude() {
                var id = seed + index;

                var selfHtml = $("<div></div>").append(origin.clone()).html();
                var result = template.replace(/{{id}}/, id);

                result = result.replace(/{{transclude}}/, selfHtml);

                //alert(result);
                origin.replaceWith(result);
                return $("#" + id);

            }

            var self = transclude();
            setCurrent(getCurrent()); //初始化

            //绑定基本事件
            self.children('.min').bind('click', function () {
                add(-1);
            });

            self.children('.max').bind('click', function () {
                add(1);
            });

            self.children('input').bind('paste', function (event) {
                return false;

            }).bind('blur', function () {
                $(this).val($(this).val().replace(/[^\d]/g, ''));
                setCurrent(getCurrent());


            }).bind('dragenter', function () {
                return false;
            });

            data = function () {
                return self.children('input').val();
            };

            //计算
            function add(val) {
                var currentVal = getCurrent();
                currentVal += val;

                setCurrent(currentVal);
            };

            function getCurrent(){
                var currentVal = parseInt(self.children('input').val());
                if (isNaN(currentVal)) {
                    currentVal = 0;
                }

                return currentVal;
            }
            //赋值
            function setCurrent(currentVal) {
                if (currentVal < min) {
                    currentVal = min;
                }
                if (currentVal > max) {
                    currentVal = max;
                }

                self.children('input').val(currentVal);
            }

            return self;
        });
    };

})(jQuery);


