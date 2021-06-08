<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="login-title">
        <div>AIcoin量化交易分析平台</div>
      </div>
      <div class="login-container">
        <el-tabs v-model="login">
          <el-tab-pane label="账户密码登录" name="first" class="user-login">
            <el-input placeholder="账户" v-model="param.username">
              <i slot:prefix class="el-input__icon el-icon-user"></i>
            </el-input>
            <el-input placeholder="密码" v-model="param.password" show-password>
              <i slot:prefix class="el-input__icon el-icon-lock"></i>
            </el-input>
            <div class="login-container_isbuttom1">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <el-link type="primary" :underline="false" href=""
                >忘记密码？</el-link
              >
            </div>

            <el-button type="primary"  @click="doLogin">登录</el-button>

            <div class="login-container_isbuttom2">
              <el-link type="primary" :underline="false" href="/register"
                >注册账户</el-link
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="手机号登录" name="second" class="phone-login">
            <el-input placeholder="手机号" v-model="phone">
              <i slot:prefix class="el-input__icon el-icon-mobile-phone"></i>
            </el-input>
            <div class="vcCode">
              <el-input placeholder="验证码" v-model="idCode">
                <i slot:prefix class="el-input__icon el-icon-message"></i>
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

            <el-button type="primary" @click="doLogin">登录</el-button>

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
      param: {
        username: "0184366",
        password: "0184366"
      },
      login: "first",
      checked: "false",
      phone: "",
      idCode: "",
    };
  },
  created() {
    this.$store.commit("clearTags");
  },
  methods: {
    doLogin() {
      this.$router.push({ path: '/dashboard'})
      localStorage.setItem("ms_username", this.param.username);
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
  display: flex;
  font-size: 20px;
}
.login-box {
  margin: auto;
  width: 410px;
  border: 1px solid #bbbbbb;
  border-radius: 1em;
  background-color: rgba(255, 255, 255, 0.3);
}
.login-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #000;
}
.login-container {
  padding: 0 30px;
}
/deep/ .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}
/deep/ .el-input {
  margin: 16px 0 16px 8px;
}
/deep/ .el-checkbox {
  color: #409EFF
}
/deep/ .el-tabs__nav-wrap::after {
  height: 1px;
}
.login-container_isbuttom1 {
  margin: 16px;
  display: flex;
  justify-content: space-between;
}
.login-container_isbuttom2 {
  margin: 16px;
  display: flex;
  justify-content: flex-end;
}
.vcCode {
  display: flex;
  justify-content: space-between;
}
.getCode {
  padding-top: 16px;
  padding-left: 10px;
}
/deep/ .el-button {
  display: block;
  width: 100%;
  height: 36px;
}
</style>