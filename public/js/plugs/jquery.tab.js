/**
 * tab页组件,可自定义active样式决定激活页的效果
 * <div class="tab">
 *     <ul>
 *         <li id="a1" class='active'...
 *         <li id="a2"...
 *     </ul>
 *     <div>
 *         <div id="tab_a1"...
 *         <div id="tab_a2"...
 *     </div>
 *</div>
 *     $(function () {
 *       $('.tab').tab(options);
 *
 *       参数对象options:
 *       {
 *         activeClass:'active',  //激活样式
 *         event: 'click', //默认是'click'，常用的可设'hover',
 *         callback: function(current) {}  //回调函数
 *   })
 */
;
(function ($) {
    jQuery.fn.tab = function (options) {
        var self = this;
        var settings = {
            activeClass: 'active', //激活样式
            event: "click", //激活事件
            tabPath: "ul li", //Tab路径，默认是ui下的li
            callback: null, //激活后回调
            activeId: null  //当前激活的项
        };
        $.extend(settings, options);
        if (settings.event == 'hover') {
            settings.event = 'mouseenter';
        }

        $(this).find(settings.tabPath).bind(settings.event, function () {
            var id = $(this).attr('id');
            var $this = $(this);

            $this.siblings().each(function () {
                $(this).removeClass(settings.activeClass);
                var oid = $(this).attr('id');
                if (oid) {
                    {
                        $('#tab_' + oid).hide();
                    }
                }
            });

            $this.addClass(settings.activeClass);
            var $active = $('#tab_' + id);
            $active.show();


            if (settings.callback) {
                settings.callback.call(self, id, $active);
            }
        });
        if (settings.activeId) {
            $(this).find('ul').find('#' + settings.activeId).trigger(settings.event);
        }
    };
})(jQuery);


