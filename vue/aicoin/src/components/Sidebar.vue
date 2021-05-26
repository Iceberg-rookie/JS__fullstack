<template>
  <div class="sideBar">
    <el-col :span="12">
      <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#2F3447"
        text-color="#fff"
        active-text-color="#fff"
        :router="true"
        :unique-opened="true"
        :collapse="isCollapse"
      >
        <el-menu-item class="sideBar-logo">
          <el-radio-group v-model="isCollapse">
            <i v-if="!isCollapse" class="el-icon-s-operation" @click="Collapse"></i>
            <i v-if="isCollapse" class="el-icon-s-operation" @click="Collapse"></i>
          </el-radio-group>
        </el-menu-item>
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </el-menu-item>
        <el-submenu index="my">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>我的</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/personalCenter">个人中心</el-menu-item>
            <el-menu-item index="/home/myOrders">我的订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="price forecasting">
          <template slot="title">
            <i class="el-icon-data-line"></i>
            <span>价格预测</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/Bitcoin">比特币</el-menu-item>
            <el-menu-item index="/home/Litecoin">莱特币</el-menu-item>
            <el-menu-item index="/home/Dogecoin">狗狗币</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="robot">
          <template slot="title">
            <i class="el-icon-s-check"></i>
            <span>量化机器人</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/trading-strategy">交易策略</el-menu-item>
            <el-menu-item index="/home/trading-record">交易记录</el-menu-item>
            <el-menu-item index="/home/robots">机器人列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="data display">
          <template slot="title">
            <i class="el-icon-data-analysis"></i>
            <span>数据展示</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/Bitcoin-price">比特币价格</el-menu-item>
            <el-menu-item index="/home/Litecoin-price">莱特币价格</el-menu-item>
            <el-menu-item index="/home/Dogecoin-price">狗狗币价格</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    Collapse() {
      this.isCollapse = !this.isCollapse
    }
  },
};
</script>

<style  lang="less" scoped>
.sideBar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: 998;
  overflow: hidden;
  i {
    color: #fff;
  }
  .sideBar-logo {
    height: 65px;
  }
  /deep/ .el-col-12 {
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