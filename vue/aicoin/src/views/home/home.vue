<template>
  <div id="app">
    <!-- 头部导航 -->
    <topBar></topBar>
    <!-- 侧边导航 -->
    <sideBar></sideBar>
    <div class="main-container">
      <transition name="move" mode="out-in">
         <!--这里的router-view用来渲染子页面-->
         <router-view></router-view>  
       </transition>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/Sidebar'
import topBar from '@/components/Topbar'
export default {
  data() {
    return {
      
    }
  },
  components:{
    'sideBar': sideBar,
    'topBar': topBar,
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