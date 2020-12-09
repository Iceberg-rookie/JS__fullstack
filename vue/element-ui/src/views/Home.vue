<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title">旅梦管理系统</div>
        <div class="info">{{userName}}</div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    }
  },
  created() {
    this.userName = localStorage.getItem('user')
  }
};
</script>
  
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container {
    height: calc(100vh - 60px);
  }
  .title {
    float: left;
    font-weight: 700;
    font-size: 24px;
  }
  .info {
    float: right;
  }
</style>