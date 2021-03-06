/**
 * @file mip-chinacn-filter 组件
 * @author
 */

define(function (require) {

    var customElement = require('customElement').create();
    var $ = require('zepto');
    // var Cookie = require('./cookie/js.cookie.min');
    // var md5 = require('./md5/md5.min');

    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.build = function () {
        var $element = $(this.element);
        var maskClass = $element.attr('mask-control');
        var $mask = $element.find('.opacity-layer');
        $element.find('.screen-conditions').on('click', 'li', function () {
            var $this = $(this);
            if($this.hasClass('current')){
                hide();
                return;
            }
            $this.siblings('.current').removeClass('current');
            $this.addClass('current');
            $this.siblings().find('div.current').removeClass('current');
            $this.find('.screen-box').addClass('current');
            $mask.addClass(maskClass);
        });

        $element.find('.screen-box').on('click', 'dd', function (e) {
            e.stopPropagation();
            var $this = $(this);
            var $siteItem = $this.find('.mip-site-item');
            var isSingle = !!$this.parent().attr('single');
            if (isSingle) {
                $this.siblings().find('span.current').removeClass('current');
            }
            $siteItem.toggleClass('current');
        });

        $element.find('.mip-clear').on('click', function (e) {
            e.stopPropagation();
            var $selected = $(this).parents('.screen-box').find('dd').find('.current');
            $selected.length > 0 && $selected.removeClass('current');
        });

        $mask.on('click', hide);
        $mask.on('touchend', hide);

        $element.find('.mip-sure').on('click', function (e) {
            e.stopPropagation();
            search(this);
            hide();
        })

        function search(me) {
            var $this = $(me);
            var data = {};

            // 1.获取隐藏域中的关键词
            var oKey = $element.attr('site-key');

            // 获取输入框中的关键词
            var key = $element.attr('site-search');
            var area = $element.attr('site-area');
            var entType = $element.attr('site-entType');
            var category = $element.attr('site-category');

            // 输入搜索
            if ($this.hasClass('search')) {
                data.key = key;
                data.entType = 4;
            } else {
                // 条件筛选搜索

                // 获取筛选条件
                var $conditions = $element.find('.screen-box').find('span.current');
                $conditions.each(function () {
                    var $this = $(this);
                    // 获取筛选项类型
                    var type = $this.attr('d-g');
                    // 获取筛选项id
                    var id = $this.attr('d-d');
                    if (data[type]) {
                        data[type] = data[type] + ',' + id;
                    } else {
                        data[type] = id;
                    }
                });

                data.key = oKey;

                if (area !== '' && !data.area) {
                    data.area = area;
                }

                if (category !== '' && !data.category) {
                    data.category = category;
                }

                data.entType = entType;

                data.forceMobile = true;

                var sortBy = $element.attr('sory-by');
                if (sortBy) {
                    data.sortBy = sortBy;
                }
            }

            // FormData
            var formData = new FormData();

            for (var o in data) {
                if(data.hasOwnProperty(o)){
                    formData.append(o, data[o]);
                }
            }

            // saveCookie();

            fetch('/common/search.php', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                window.location.href = response.url;
            }).catch(function (e) {
                alert("当前访问用户较多，请稍后重试。");
            });
        }

        function hide() {
            $mask.removeClass(maskClass);
            $element.find('.screen-box').removeClass('current');
            $element.find('li.current').removeClass('current');;
        }

        // function saveCookie() {
        //     var url = location.href;
        //     Cookie.set('search-token', md5(url), { 'expires': 1, 'path': '/', 'domain': 'china.cn' });
        // }
    };

    return customElement;
});
