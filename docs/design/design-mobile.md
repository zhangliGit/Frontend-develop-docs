# 移动端设计

## 颜色

**一共设计12种色调**

+ 主色 6种

+ 辅助色 4种

+ 错误色 2种

![color](/img/design-color.png)

**<p class="main-color">统一全局变量样式</p>**

```
@main-color: #7b92f5; //主色
@title-color: #333;  //标题颜色
@des-color: #666;  //描述性颜色
@second-color:#999; //辅助性，次要颜色
@dark-color:#ccc; //暗淡色
@bor-color: #eee; //边框，线条颜色
@tip-color: #ff0000; //提示颜色
@err-color: #f05248; //错误颜色

@other1-color: #74d4d4; //辅助色
@other2-color: #90bef1; //辅助色
@other3-color: #9292f2; //辅助色
@other4-color: #caa4e6; //辅助色

@radius: 8px; //圆角大小
```

## 字体大小

```
@font-large: 36px; //重要的标题字体大小
@font-middle: 32px; //次要的标题字体大小
@font-title: 30px; //普通的标题字体大小
@font-des: 28px; //描述性字体大小
@font-second: 24px; //辅助性文字大小
@font-tip: 20px; //提示性文字大小
```