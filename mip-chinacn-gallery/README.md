# mip-chinacn-gallery

mip-chinacn-gallery 可滑动的图片列表

标题|内容
----|----
类型|业务
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://mipcache.bdstatic.com/extensions/platform/v1//mip-chinacn-gallery/mip-chinacn-gallery.js

## 示例

### 基本用法
```html
<mip-chinacn-gallery num="5" between="5">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <span class="current">1</span>
            </div>
            <div class="swiper-slide">
                <span>2</span>
            </div>
            <div class="swiper-slide">
                <span>3</span>
            </div>
            <div class="swiper-slide">
                <span>4</span>
            </div>
            <div class="swiper-slide">
                <span>5</span>
            </div>
            <div class="swiper-slide">
                <span>6</span>
            </div>
            <div class="swiper-slide">
                <span>7</span>
            </div>
            <div class="swiper-slide">
                <span>8</span>
            </div>
            <div class="swiper-slide">
                <span>9</span>
            </div>
            <div class="swiper-slide">
                <span>10</span>
            </div>
            <div class="swiper-slide">
                <span>11</span>
            </div>
            <div class="swiper-slide">
                <span>12</span>
            </div>
            <div class="swiper-slide">
                <span>13</span>
            </div>
            <div class="swiper-slide">
                <span>14</span>
            </div>
        </div>
    </div>
</mip-chinacn-gallery>
```

## 属性

### num

说明：设置slider容器能够同时显示的slides数量
必选项：否
类型：数字
取值范围：>0
默认值：5

### between

说明：slide之间的距离
必选项：否
类型：数字
取值范围：>0
单位：px
默认值：5

## 注意事项

