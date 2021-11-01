# 颜色主题 1.0

支持定制产品的颜色主题，能够静态（编译）或动态（使用时）地切换主题。

## 实现方式

颜色主题1.0将css变量作为主要实现方式，在牺牲了部分兼容性的（伪）需求之后，极大简化了动态主题切换中样式的维护成本。

### 颜色定义和颜色变量的生成

定义颜色映射如下：

```scss
$fui-colors: (
  primary: (
    menu-hover:  #F0F8FF,
    menu-active: #E6F3FF,
    hover:       #35A9FF,
    normal:      #1D96F3,
    active:      #1575CF,
  ),
  secondary: (
    menu-hover:  #EEFBFC,
    menu-active: #DEF7FA,
    hover:       #2ACFE2,
    normal:      #17C1D4,
    active:      #0BA1B3,
  ),
);
```

该颜色map的编译产出为颜色变量css文件：

```css
:root {
  --fui-primary-color-menu-hover: #F0F8FF;
  --fui-primary-color-menu-active: #E6F3FF;
  --fui-primary-color-hover: #35A9FF;
  --fui-primary-color-normal: #1D96F3;
  --fui-primary-color-active: #1575CF;
  --fui-secondary-color-menu-hover: #EEFBFC;
  --fui-secondary-color-menu-active: #DEF7FA;
  --fui-secondary-color-hover: #2ACFE2;
  --fui-secondary-color-normal: #17C1D4;
  --fui-secondary-color-active: #0BA1B3;
}
```

如果要添加一种新的颜色主题，只需要添加一个新的颜色映射文件即可。

### 颜色变量的引用

通过工具函数引用颜色变量：

```scss
@function fui-color($color-type, $color-name) {
  @return var(--fui-#{$color-type}-color-#{$color-name})
}

$brand-primary: fui-color(primary, normal);
```

等价于：

```scss
$brand-primary: var(--fui-primary-color-normal);
```

所有可用颜色变量见代码 /src/styles/themes。

### 主题切换

主题切换的方法即为在页面的style部分添加要切换主题的css变量文件，如下：

```html
<link rel="stylesheet" class="style-manager-theme" href="assets/themes/black.css">
```

需要注意，在打包时需要把flash-ui中的css变量文件也一同打包到项目的静态资源中，比如assets/themes文件夹下，建议添加脚本自动化这个流程。

### 主题固化

为使主题在页面刷新之后保持不变，建议将已切换的主题存储在localStorage中，并在页面初始化的时候读取这个值，然后初始化主题。
