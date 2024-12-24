<template>
  <el-container>
    <el-header>
      <img src="../assets/images/logo-BsTXx7oy.png" alt="logo">
      <div>个人信息</div>
      <div>健康常识</div>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
   <el-button type="success" @click="Logout">退出登录</el-button>
   <el-button type="success" @click="get11">获取用户信息</el-button>
</template>

<style scoped>
.el-header {
  display: flex;
  --el-header-padding: 0 20px;
  --el-header-height: 70px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
  padding: var(--el-header-padding);
  justify-content: flex-start;
}
.el-header>div {
  font-size: 25px;
  font-family: "Microsoft YaHei";
  padding: 15px 25px;
  margin-left: 10px;
}
.el-header>div:hover{
  color: aqua;
}
</style>

<script lang="ts" setup name="Layout">
import { ref } from 'vue'
import api from '../utils/request'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import useToeknStore from '../stores/useToken'
const router = useRouter()

const Logout = async () => {
  try {
    const response = await api.post("/v1/logout");
    if (response.data.code === 200) {
      ElMessage.success('退出成功');
      // 清除 token
      useToeknStore().removeToken();
      await router.replace({name: 'login'});
    }
  } catch (error) {
    // 登录失败时清除 token 并跳转到登录页
    router.replace({ name: 'login' });
  }
};

const getUserInfo = async () => {

  let data = await api.get("/user/info")

  console.log('@', data);

}
const get11 = async () => {
  let data = await api.get("register/gettoken")
}


</script>