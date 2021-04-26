<template>
  <div class="page">
    <div class="container">
      <div class="aicoin-title">
        <i><img src="" alt="" /></i>
        <h3>AIcoin量化交易分析平台</h3>
      </div>
      <div class="aicoin-detail">
        <p>
          AICoin是一个数字货币量化分析与交易的平台，致力于帮助交易者分析数字货币价格走向，
          利用各种金融指标和Al技术进行走势预测，并对接交易所进行程序化交易。
          是一个数字货币量化分析与交易的平台，致力于帮助交易者分析数字货币价格走向，
          利用各种金融指标和Al技术进行走势预测，并对接交易所进行程序化交易。
        </p>
      </div>
      <div class="aicoin-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账户密码登录" name="first">
            <el-input placeholder="账户" v-model="input1">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
            <el-input placeholder="密码" v-model="input2">
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>

            <el-checkbox v-model="checked">自动登录</el-checkbox>
            <el-link type="primary">忘记密码？</el-link>

            <el-button type="primary">登录</el-button>

            <el-link type="primary">注册账户</el-link>
          </el-tab-pane>
          <el-tab-pane label="手机号登录" name="second">
            <el-input placeholder="手机号" v-model="input1">
              <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
            </el-input>
            <el-input placeholder="验证码" v-model="input2">
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
            </el-input>
          </el-tab-pane>
          
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      input1: '',
      input2: '',
      checked: 'false'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
</style>