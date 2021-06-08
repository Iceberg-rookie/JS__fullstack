<template>
  <div class="register-wrap">
    <div class="register-box">
      <div class="register-title">
        <!-- <i><img src="./../assets/img/logo.png" alt="" /></i> -->
        <div>AIcoin量化交易分析平台</div>
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
            <el-form-item prop="identifyCode" style="margin-left: 0">
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
            <div class="register-btn">
              <el-button type="primary" @click="register('ruleForm')">注册</el-button>
            </div>
            
            <el-link type="primary" :underline="false" href="/login"
              >使用已有账户登录</el-link
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 校验邮箱
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入邮箱地址"));
      }
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

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

<style scoped>
.register-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
  display: flex;
}
.register-box {
  margin: auto;
  width: 410px;
  border-radius: 5px;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.3);
}
.register-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #000;
  border-bottom: 1px solid #ddd;
}
.register-container {
  padding: 30px 30px;
}
/deep/ .el-form-item__content {
  margin-left: 0 !important;
}
.vcCode {
  display: flex;
  justify-content: space-between;
}
/deep/ .el-input {
  box-sizing:border-box;
  width: 100%;
}
/deep/ .el-button {
  display: block;
  width: 100%;
  height: 36px;
}
</style>