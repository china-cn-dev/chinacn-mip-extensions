# mip-chinacn-slide-filter

mip-chinacn-slide-filter 组件说明

标题|内容
----|----
类型|通用
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://mipcache.bdstatic.com/static/v1/mip-chinacn-slide-filter/mip-chinacn-slide-filter.js

## 示例

### 基本用法
```html
<div on="tap:filter.show">点击</div>
<mip-chinacn-slide-filter id="filter" site-area="" site-key="洒水车" site-search="" site-entType="4" site-category="3535" sort-by="2">
    <div class="screen-layer" data-role="screen-layer">
        <div class="screen-classify" data-role="screen-classify">
            <div class="title" data-role="slide-title">地区<em></em></div>
            <div class="screen-detail fl-clr" data-role="slide-content">
                <span d-g="area" d-d="10503" class="site_item ">廊坊</span>
                <span d-g="area" d-d="10508" class="site_item ">邢台</span>
                <span d-g="area" d-d="10504" class="site_item ">沧州</span>
                <span d-g="area" d-d="10502" class="site_item ">衡水</span>
                <span d-g="area" d-d="10501" class="site_item ">石家庄</span>
                <span d-g="area" d-d="10510" class="site_item ">秦皇岛</span>
            </div>
        </div>
        <div class="btn-layer" data-role="slide-btn">
            <span data-role="reset-btn">重置</span>
            <span class="sure site_sure">确定</span>
        </div>
    </div>
    <div class="opacity-layer"></div>
</mip-chinacn-slide-filter>
```

## 属性

### {属性名}

说明：{说明}
必选项：{是|否}
类型：{类型}
取值范围：{取值范围}
单位：{单位}
默认值：{默认值}

## 注意事项

