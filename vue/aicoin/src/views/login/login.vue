<template>
  <div class="page">
    <div class="login-box">
      <div class="login-title">
        <i><img src="./../../assets/img/logo.png" alt="" /></i>
        <h3>AIcoin量化交易分析平台</h3>
      </div>
      <div class="login-detail">
        <p>
          AICoin是一个数字货币量化分析与交易的平台，致力于帮助交易者分析数字货币价格走向，
          利用各种金融指标和Al技术进行走势预测，并对接交易所进行程序化交易。
          是一个数字货币量化分析与交易的平台，致力于帮助交易者分析数字货币价格走向，
          利用各种金融指标和Al技术进行走势预测，并对接交易所进行程序化交易。
        </p>
      </div>
      <div class="login-container">
        <el-tabs v-model="login">
          <el-tab-pane label="账户密码登录" name="first" class="user-login">
            <el-input placeholder="账户" v-model="user">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
            <el-input placeholder="密码" v-model="password" show-password>
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
            <div class="login-container_isbuttom1">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <el-link type="primary" :underline="false" href=""
                >忘记密码？</el-link
              >
            </div>

            <el-button type="primary">登录</el-button>

            <div class="login-container_isbuttom2">
              <el-link type="primary" :underline="false" href="/register"
                >注册账户</el-link
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="手机号登录" name="second" class="phone-login">
            <el-input placeholder="手机号" v-model="phone">
              <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
            </el-input>
            <div class="vcCode">
              <el-input placeholder="验证码" v-model="idCode">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>

              <div class="getCode">
                <el-button>获取验证码</el-button>
              </div>
            </div>

            <div class="login-container_isbuttom1">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <el-link type="primary" :underline="false" href=""
                >忘记密码？</el-link
              >
            </div>

            <el-button type="primary" @click="login(doLogin)">登录</el-button>

            <div class="login-container_isbuttom2">
              <el-link type="primary" :underline="false" href="/register"
                >注册账户</el-link
              >
            </div>
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
      login: "first",
      user: "",
      password: "",
      checked: "false",
      phone: "",
      idCode: "",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(245, 245, 245);
}
  .login-box {
    margin: auto;
    width: 410px;
    border: 1px solid #BBBBBB;
    border-radius: 1em;
    font-size: 12px;
    background-color: rgba(243, 243, 243, 0.1);
  }
    .login-title {
      margin: 1em auto;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        vertical-align:middle;
      }
      h3 {
        display: inline;
        vertical-align:middle;
      }
    }
    .login-detail {
      display: flex;
      margin: 1em;
      p {
        text-indent: 2em;
        line-height: 1.3em;
        color: #BBBBBB;
      }
    }
    .login-container {
      /deep/ .el-tab-pane {
        padding: 0.4em;
      }
      /deep/ .el-tabs__nav-scroll {
        display: flex;
        justify-content: center;
      }
      /deep/ .el-input {
        margin: 0.8em 0 0.8em 0.4em;
        width: 96%;
      }
      .login-container_isbuttom1 {
        margin: 0.8em;
        display: flex;
        justify-content: space-between;
      }
      /deep/ .el-button {
        margin: 0.8em;
        width: 94%;
      }
      .login-container_isbuttom2 {
        margin: 0.8em;
        padding: 0 1em 0.4em 0;
        display: flex;
        justify-content: flex-end;
      }
      .vcCode {
        display: flex;
        justify-content: space-between;
        .getCode {
          padding: 0.5em;
          /deep/ .el-button {
            margin: 0.4em 0.8em 0.4em 0.4em;
          }
        }
      }
    }
</style>