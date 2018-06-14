/**
 * @file mip-chinacn-statistics 组件
 * @author
 */

define(function(require) {
    'use strict';

    var customElement = require('customElement').create();

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function() {
        var data = {};
        // 页面地址
        data.url = location.href;
        // 来源
        data.referrer = document.referrer;
        // ua
        data.userAgent = navigator.userAgent;
        // 请求地址
        var src = this.element.getAttribute('src');
        // 请求
        fetch(src, {
            method: 'POST',
            body: 'type=mip&str=' + JSON.stringify(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    };

    return customElement;
});
