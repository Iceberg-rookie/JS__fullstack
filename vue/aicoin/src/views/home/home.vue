<template>
  <div id="app">
    <!-- 头部导航 -->
    <TopBar></TopBar>
    <!-- 侧边导航 -->
    <SideBar></SideBar>
    <!-- 内容 -->
    <div class="main-container">
      <transition name="move" mode="out-in">
         <!--这里的router-view用来渲染子页面-->
         <router-view></router-view>  
       </transition>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'
export default {
  data() {
    return {
      
    }
  },
  components:{
    'TopBar': TopBar,
    'SideBar': SideBar,
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;
}
  .main-container {
    margin-left: 15em;
    height: 90vh;
  }
</style>