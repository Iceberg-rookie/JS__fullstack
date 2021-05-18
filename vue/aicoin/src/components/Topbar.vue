<template>
  <div class="topBar">
    <div class="left-panel">
    </div>
    <div class="right-panel">
      <el-dropdown>
        <span class="el-dropdown-link">
          中文<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="el-icon-refresh-right" @click="refresh"></i>
      <i class="el-icon-full-screen" @click="screen"></i>
      <el-dropdown>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="36"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data()  {
    return{
      fullscreen: false,
    }
  },
  methods: {
    // 刷新
    refresh() {
      location.reload()
    },
    // 全屏
    screen(){
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  }
}
</script>

<style lang="less" scoped>
.topBar {
  z-index: 999;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #EBEBEB;
  background-color: #fff;
  .right-panel {
    i {
      margin: 1em;
      cursor: pointer;
    }
    .el-avatar {
      cursor: pointer;
      vertical-align: middle;
    }
  }
}
</style>