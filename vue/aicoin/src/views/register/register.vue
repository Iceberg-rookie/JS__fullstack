<template>
  <div class="page">
    <div class="register-box">
      <div class="register-title">
        <i><img src="./../../assets/img/logo.png" alt="" /></i>
        <h3>AIcoin量化交易分析平台</h3>
      </div>
      <div class="register-detail">
        <p>
          AICoin是一个数字货币量化分析与交易的平台，致力于帮助交易者分析数字货币价格走向，
          利用各种金融指标和Al技术进行走势预测，并对接交易所进行程序化交易。
          是一个数字货币量化分析与交易的平台，致力于帮助交易者分析数字货币价格走向，
          利用各种金融指标和Al技术进行走势预测，并对接交易所进行程序化交易。
        </p>
      </div>
      <div class="register-container">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item>
            <span>注册</span>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              type="email"
              v-model="ruleForm.email"
              autocomplete="off"
              placeholder="邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              placeholder="6-16位密码，区分大小写"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              placeholder="确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input
              type="phone"
              v-model="ruleForm.phone"
              autocomplete="off"
              placeholder="11位手机号"
            ></el-input>
          </el-form-item>
          <div class="vcCode">
            <el-form-item prop="identifyCode">
              <el-input
                type="identifyCode"
                v-model="ruleForm.identifyCode"
                autocomplete="off"
                placeholder="输入验证码"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <div class="getCode">
                <el-button>获取验证码</el-button>
              </div>
            </el-form-item>
          </div>
          <el-form-item prop="register">
            <el-button type="primary" @click="register('ruleForm')"
              >注册</el-button
            >
            <el-link type="primary" :underline="false" href="/"
              >使用已有账户登录</el-link
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import ribbon from '@/assets/js/ribbon'
export default {
  data() {
    // 校验邮箱
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入邮箱地址"));
      }
      // 验证邮箱的正则表达式
      const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (regEmail.test(value)) {
        // 合法的邮箱
        return callback();
      }
      // 不合法的邮箱
      callback(new Error("请输入正确的邮箱"));
    };
    // 校验密码
    var validatePass = (rule, value, callback) => {
      // 验证密码的正则表达式
      var passwordreg = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,16}/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!passwordreg.test(value)) {
          callback(
            new Error(
              "密码必须由数字、字母（区分大小写）、特殊字符组合,请输入6-16位"
            )
          );
        } else {
          callback();
        }
      }
    };
    // 再次校验密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 校验手机号
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入手机号码"));
      }
      // 验证手机号的正则表达式
      const regPhone = /^1(3|4|5|6|7|8|9)\d{9}$/;

      if (regPhone.test(value)) {
        // 合法的手机号
        return callback();
      }
      // 不合法
      callback(new Error("请输入正确的手机号"));
    };
    // 校验验证码
    var validateidentifyCode = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入验证码"));
      }
    };
    return {
      ruleForm: {
        email: "",
        pass: "",
        checkPass: "",
        phone: "",
        identifyCode: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: ["blur", "change"] }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        identifyCode: [{ validator: validateidentifyCode, trigger: "blur" }],
      },
    };
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.register-box {
  margin: auto;
  width: 410px;
  // border: 1px solid #bbbbbb;
  border-radius: 1em;
  font-size: 12px;
  background-color: rgba(243, 243, 243, 0.1);
}
.register-title {
  margin: 1em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    vertical-align: middle;
  }
  h3 {
    display: inline;
    vertical-align: middle;
  }
}
.register-detail {
  display: flex;
  margin: 1em;
  p {
    text-indent: 2em;
    line-height: 1.3em;
    color: #bbbbbb;
  }
}
.register-container {
  /deep/ .el-form-item {
    margin-bottom: 0;
  }
  /deep/ .el-form-item__content {
    margin-left: 0 !important;
    display: block;
    span {
      padding-left: 0.8em;
    }
  }
  /deep/ .el-form-item__error {
    position: relative;
    left: 0.8em;
    padding-top: 0;
  }
  /deep/ .el-input {
    margin: 0.8em;
    width: 94%;
  }
  .register-container_isbuttom1 {
    margin: 0.8em;
    display: flex;
    justify-content: space-between;
  }
  /deep/ .el-button {
    margin: 0.8em;
    width: 94%;
  }
  .vcCode {
    display: flex;
    justify-content: space-between;
    /deep/ .el-input {
      box-sizing:border-box;
      width: 100%;
    }
    .getCode {
      padding-right: 1em;
    }
  }
}
</style>