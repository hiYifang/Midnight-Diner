<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

import Navbar from '@/components/backend/Navbar.vue';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  // 區域註冊
  components: {
    Navbar,
    ToastMessages,
  },
  // 使用 mitt 套件
  provide() {
    return {
      emitter,
    };
  },
  created() {
    // 由 Cookie 取出 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    // 再將 token 加入 Headers
    this.$http.defaults.headers.common.Authorization = token;

    // 檢查用戶是否仍持續登入
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api).then((res) => {
      // 登入失敗，轉回 Login 頁面
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
