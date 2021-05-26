# v-if 和 v-show
- v-if 和 v-show 都是按条件渲染
- v-show 是不管初始条件为什么，都会渲染这个元素，只是简单地基于css的切换
- v-if 是惰性的，就是如果 v-if 一开始的初始值为false，那它只有等到变为true时才会开始渲染条件块
- v-if 的切换开销大，v-show 的初始渲染开销大，频繁切换就用v-show好