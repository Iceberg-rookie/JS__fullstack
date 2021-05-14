<template>
  <div id="app">
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
    <div class="container">
      <div class="sideBar">
        <div class="side-bar-logo">
          <img src="@/assets/img/logo.png" alt="" style="width: 40px" />
        </div>
        <el-col :span="12">
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-submenu index="user">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>我的</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/personalMessage" @click="reloadRouter('/personalMessage')">个人信息</el-menu-item>
                <el-menu-item index="/editMessage" @click="reloadRouter('/editMessage')">修改信息</el-menu-item>
                <el-menu-item index="/myOrders" @click="reloadRouter('/myOrders')">我的订单</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-data-line"></i>
                <span>价格预测</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">比特币</el-menu-item>
                <el-menu-item index="2-2">莱特币</el-menu-item>
                <el-menu-item index="2-3">狗狗币</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-check"></i>
                <span>量化机器人</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">交易策略</el-menu-item>
                <el-menu-item index="3-2">交易记录</el-menu-item>
                <el-menu-item index="3-3">机器人列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-data-analysis"></i>
                <span>数据展示</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="home/btc">比特币价格</el-menu-item>
                <el-menu-item index="4-2">莱特币价格</el-menu-item>
                <el-menu-item index="4-3">狗狗币价格</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
      <div class="main-container">

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
    reloadRouter(path) {
      this.$router.replace({
        path: "/redirect",
        query: {
          nextPath: path
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;
}
  .headWrapper {
    z-index: 999;
    overflow: hidden;
    .el-menu-demo {
      display: flex;
      justify-content: flex-end;
    }
  }
  .container {
    width: 100vw;
  }
  .sideBar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 998;
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
  .main-container {
    margin-left: 15em;
    height: 90vh;
  }
</style>