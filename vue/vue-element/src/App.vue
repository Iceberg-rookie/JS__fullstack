<template>
  <div class="page">
    <p>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </p>
    
    <VerifyCode />

    <!-- 路由入口 -->
    <transition name="fade">
    <!-- <router-view></router-view> -->
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave-active{
    opacity: 0;
  }
  .page {
    text-align: center;
  }
  p {
    text-align: center;
  }
</style>