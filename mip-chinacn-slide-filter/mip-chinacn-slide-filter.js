/**
 * @file mip-chinacn-slide-filter 组件
 * @author
 */

define(function(require) {

    var customElement = require('customElement').create();
    var util = require('util');
    var Naboo = util.naboo;
    // var Cookie = require('./cookie/js.cookie.min');
    // var md5 = require('./md5/md5.min');

    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.build = function() {
        var isComplete = false;
        var element = this.element;
        var slideTitles = element.querySelectorAll('[data-role="slide-title"]');
        slideTitles.forEach(function(title) {
            title.addEventListener('click', function() {
                var nextElem = this.nextElementSibling;
                nextElem.classList.toggle('current');
            });
        });
        var slideItems = element.querySelectorAll('.site_item');
        slideItems.forEach(function(item) {
            item.addEventListener('click', function() {
                this.classList.toggle('current');
            });
        });
        var resetBtn = element.querySelector('[data-role="reset-btn"]');
        resetBtn.addEventListener('click', function() {
            slideItems.forEach(function(item) {
                if (item.classList.contains('current')) {
                    item.classList.remove('current');
                }
            });
        });
        var confirmBtn = element.querySelector('.sure');
        confirmBtn.addEventListener('click', function() {
            var data = {};
            var oldIds = {};
            var siteKey = element.getAttribute('site-key');
            var siteSearch = element.getAttribute('site-search');
            var siteArea = element.getAttribute('site-area');
            var siteEntType = element.getAttribute('site-entType');
            var siteCategory = element.getAttribute('site-category');

            if (this.classList.contains('search')) {
                data.key = siteSearch;
                data.entType = 4;
            } else {
                slideItems.forEach(function(item) {
                    if (item.classList.contains('current')) {
                        var type = item.getAttribute('d-g');
                        var id = item.getAttribute('d-d');
                        if (!oldIds[type + id]) {
                            if (data[type]) {
                                data[type] += ',' + id;
                            } else {
                                data[type] = id;
                            }
                            oldIds[type + id] = type + id;
                        }
                    }
                });

                data.key = siteKey;
                if (!!siteArea && !data.area) {
                    data.area = siteArea;
                }
                if (!!siteCategory && !data.category) {
                    data.category = siteCategory;
                }
                data.entType = siteEntType;
                data.forceMobile = true;
                var sortBy = element.getAttribute('sort-by');
                if (sortBy) {
                    data.sortBy = sortBy;
                }
            }
            // saveCookie();
            var formData = new FormData();

            for (var o in data) {
                if (data.hasOwnProperty(o)) {
                    formData.append(o, data[o]);
                }
            }

            fetch('/common/search.php', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            }).then(function(response) {
                return response.json();
            }).then(function(response) {
                window.location.href = response.url;
            }).catch(function(e) {
                hideLayer();
                alert("当前访问用户较多，请稍后重试。");
            });
        });
        var layer = element.querySelector('[data-role="screen-layer"]');
        var opacityLayer = element.querySelector('.opacity-layer');
        opacityLayer.addEventListener('click', hideLayer);
        this.addEventAction('show', function() {
            var naboo = new Naboo();
            opacityLayer.classList.remove('hide');
            naboo.animate(layer, {
                'transform': 'translateX(-330px)'
            }).start(function() {
                isComplete = true;
            });
        });

        function hideLayer() {
            if (!isComplete) {
                return;
            }
            var naboo = new Naboo();
            opacityLayer.classList.add('hide');
            naboo.animate(layer, {
                'transform': 'translateX(0px)'
            }).start(function() {
                isComplete = false;
            });
        }

        /*function saveCookie() {
            var url = location.href.split('#')[0];
            Cookie.set('search-token', md5(url), { 'expires': 1, 'path': '/', 'domain': 'china.cn' });
        }*/
    };

    return customElement;
});
