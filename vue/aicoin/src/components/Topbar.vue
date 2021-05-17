<template>
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
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">中文</template>
          <el-menu-item index="4-1">中文</el-menu-item>
          <el-menu-item index="4-2">English</el-menu-item>
        </el-submenu>
      </el-menu>
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
      // console.log(key, keyPath);
    },
  }
}
</script>

<style lang="less" scoped>
.headWrapper {
  z-index: 999;
  overflow: hidden;
  .el-menu-demo {
    display: flex;
    justify-content: flex-end;
  }
}
</style>