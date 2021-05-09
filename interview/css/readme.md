# css 盒模型
- 标准盒模型   宽：width
- IE盒模型     宽: width + padding + border

# 画一条0.5px的线
1. transform: scale(0.5);
2. border-image
3. 线性渐变 linear-gradient

# link标签和import标签的区别
- link标签的html标签，@import是css提供的
- link会在页面加载的时候同时加载，
  @import引入的css会在页面加载完成后再加载
- link没有兼容性，@import必须IE5以上
- link的权重比@import高

# transition 和 animation 的区别
- transition需要触发一个事件才能出现动画效果，
  而animation不需要触发事件就能出现动画效果
- transition是2帧2帧的运行 from...to,
  animation是一帧一帧

# flex布局
- 传统布局 = 依赖display + position + float,这种在特殊布局中非常不方便，
  比如垂直居中 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
- flex-direction: row | column 决定主轴的方向
- flex-wrap: nowrap | wrap 决定换行规则

# BFC
- 块级格式化上下文，是一个独立的渲染区域，有一定的布局规则
- BFC区域不会与float box重叠
- BFC是页面上一个独立容器，子元素不会影响外面
- 计算BFC区域高度时，浮动元素的高度也会参与计算

# 怎么生成BFC
- float不为none
- position为flex和absoult
- display为inline-block, flex, table-cell
- overflow不为visible

# 垂直居中的方法
- postion
- flex
- margin(知道父容器的宽高)
- table-cell （父容器） vertical-align: middle (子容器)

# js动画和css动画有什么差异
- 渲染线程分为 main thread(主线程) 和 compositor thread(合成线程)
- 如果css动画只改变transform和opacity,这时css动画得以在compositor thread(合成线程)完成
- 而js动画一定会在main thread(主线程)执行
- 区别：
  1. js 比 css 性能开销大
  2. css 比 js 更简单，性能会更好
  3. 对帧表现不好的低版本浏览器 css3可以自然降级(兼容)
  4. css动画有天然的事件支持(具备各种属性写动画)
  5. css3有兼容性问题
  
# 块级元素和行内元素
- 块级元素独占一行，行内元素不会
- 块级元素会自动填充父元素，并且可以设置margin、padding、width、height
- 行内元素的width、height会失效，并且垂直方向的margin、padding会失效

# 多行文本的省略号
- display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 3 (设置为3行)
  overflow: hidden
  text-overflow: ellipsis

# 清除浮动
- 在浮动元素后面再使用一个带clear属性的空元素 clear: both
- 给浮动元素添加 overflow: hidden
- 给浮动的元素的父元素添加浮动
- css的 :after 伪元素

# css3的新特性
- 准备好8个

# css选择器有哪些？优先级呢
- id选择器，class选择器，id选择器，伪元素选择器，伪类选择器，属性选择器

- 样式来源优先级： important > 内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义 > 浏览器默认样式

# float的元素，display是什么？
- display: block

# 三栏布局的实现
圣杯，双飞翼
三列布局：
1. flex
2. 两列定宽一列自适应 float + margin
3. display: table
4. display: grid(栅格系统)

# display: table 和 table 本身有什么区别
- display: table声明能够让html元素和它的子节点像table元素一样使用，但是文件会比table小，div + css 是逐行显示，table 是页面完全加载后才显示

# 设置一个元素的背景色，背景色会填充哪些区域
content + padding + border

# inline-block, inline和block的区别；为什么img是inline还可以设置宽高
- 块级元素默认前后自带换行符，所以它会自动占据一行
- 而行内块级元素不带换行符，所以它不会占据一行
- img 是 可替换换元素(img、video、 iframe) 它们的内容不受当前文档的样式影响 css可以影响可替换元素的位置，但不会影响可替换元素的内容，可替换元素拥有内置宽高，与可以设置宽高，它们的性质和设置了display: inline-block一致

# 重绘 和 回流 (重排) (回流一定会引起重绘，而重绘不一定会引起回流，回流会重新排列布局，而重绘可能只是重绘颜色)

# 让文档脱离文档流
- 定位
- 浮动

# css 画三角形
- <div class="abc"></div>

  .abc {
        width: 0;
        height: 0;
        border-top: 50px solid blue;
        border-right: 50px solid transparent;
        border-left: 50px solid transparent;
      }

# css 布局种类
圣杯布局，双飞翼布局，flex布局，绝对定位布局，表哥布局、网格布局