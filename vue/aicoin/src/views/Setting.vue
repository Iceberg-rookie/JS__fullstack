<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-setting"></i> 个人设置
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col>
        <el-tabs :tab-position="tabPosition" style="height: 100%;">
          <el-tab-pane label="基本设置">
            <div class="settings">
              <div class="sub-title">
                <span>基本设置</span>
              </div>
              <div class="user-avator" style="width: 200px;">
                <div class="user-avator">
                  <img src="../assets/img/img.jpg" alt />
                </div>
                <el-button size="small" icon="el-icon-upload2" class="upload">更换头像</el-button>
              </div>
              <div class="edit">
                <div class="uername-title">
                  <span>用户名</span>
                </div>
                <el-input v-model="username" style="width: 500px"></el-input>
                <div class="phone-title">
                  <span>联系电话</span>
                </div>
                <el-input v-model="phone" style="width: 500px"></el-input>
                <div class="email-title">
                  <span>邮箱</span>
                </div>
                <el-input v-model="email" style="width: 500px"></el-input>
                <div class="information-title">
                  <span>个人简介</span>
                </div>
                <el-input
                  type="textarea"
                  v-model="informations"
                  style="width: 500px"
                  maxlength="100"
                  show-word-limit
                ></el-input>
                <div class="address-title">
                  <span>居住地址</span>
                </div>
                <el-input v-model="address" style="width: 500px"></el-input>
                <div class="update">
                  <el-button type="primary" @click="updateInformation">更新基本信息</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="安全设置">
            <div class="settings">
              <div class="sub-title">
                <span>安全设置</span>
              </div>
              <div class="edit">
                <div class="oldpwd">
                  <span>旧密码</span>
                </div>
                <el-input type="password" v-model="oldpwd" show-password style="width: 500px"></el-input>
                <el-divider></el-divider>
                <div class="newpwd">
                  <span>新密码</span>
                </div>
                <el-input type="password" v-model="newpwd" show-password style="width: 500px"></el-input>
                <el-divider></el-divider>
                <div class="checkpwd">
                  <span>确认新密码</span>
                </div>
                <el-input type="password" v-model="checkpwd" show-password style="width: 500px"></el-input>
                <el-divider></el-divider>

                <el-button type="primary" @click="updatePassword">修改密码</el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'settings',
    data() {
      return {
        tabPosition: 'left',
        username: '',
        phone: '',
        email: '',
        informations: '',
        address: '',
        oldpwd: '',
        newpwd: '',
        checkpwd: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      updateInformation() {
        this.$message({
          message: '更新基本信息成功',
          type: 'success'
        });
      },
      updatePassword() {
        this.$message({
          message: '修改密码成功',
          type: 'success'
        });
      },
    },
  }
</script>
<style scoped>
.top-title {
  margin: 5px;
  font-size: 16px;
  font-weight: 500;
}
.el-row {
  line-height: 44px;
  font-weight: 500;
  background-color: #fff;
}
.sub-title {
  font-size: 20px;
  margin-left: 20px;
}
.user-avator {
  margin-top: 30px;
  margin-left: 100px;
}
.user-avator img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.upload {
  margin-left: 110px;
  font-weight: bold;
}
.edit {
  margin-left: 20px;
}
.update {
  margin-top: 20px;
}
</style>