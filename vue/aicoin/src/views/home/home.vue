<template>
  <div class="page">
    <div class="headWrapper">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-unfold"></i>
        </el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-submenu index="3">
          <template slot="title">我的工作台</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项1</el-menu-item>
            <el-menu-item index="3-4-2">选项2</el-menu-item>
            <el-menu-item index="3-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">中文</template>
          <el-menu-item index="4-1" @click="changeLang(zh)">中文</el-menu-item>
          <el-menu-item index="4-2" @click="changeLang(en)">English</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="mainContainer">
      <div class="sideBar">
        <div class="side-bar-logo">
          <img src="@/assets/img/logo.png" alt="" style="width: 40px" />
        </div>
        <el-col :span="12">
          <el-menu
            default-active="1-4"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      
    </div>
  </div>
</template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeLang() {},
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
}
.headWrapper {
  z-index: 998;
  .el-menu-demo {
    display: flex;
    justify-content: flex-end;
    /deep/ .el-menu-item {
      display: flex;
      justify-items: flex-start;
    }
  }
}
.sideBar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
  // overflow-y: scroll;
  .side-bar-logo {
    height: 61px;
    background-color: rgb(84, 92, 100);
    img {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  /deep/ .el-col {
    width: 15em;
    height: 100%;
    overflow: hidden;
  }
  /deep/ .el-menu {
    border-right: hidden;
    height: 100%;
  }
}
</style>