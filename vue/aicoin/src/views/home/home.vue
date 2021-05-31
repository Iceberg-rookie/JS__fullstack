<template>
  <div>
    <!-- 侧边导航 -->
    <SideBar></SideBar>
    <!-- 内容 -->
    <div class="main-container">
      <!-- 头部导航 -->
      <TopBar></TopBar>
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
.main-container {
  display: flex;
  flex: auto;
  flex-direction: column;
}
</style>