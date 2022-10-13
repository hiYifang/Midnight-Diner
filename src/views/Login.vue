<template>
  <div
    class="d-flex justify-content-center align-items-center min-vh-100 bg-light"
  >
    <div class="container py-3">
        <div class="row justify-content-center align-items-center">
          <h1 class="col-md-4">
            <img
              src="@/assets/img/welcome.jpeg"
              alt="welcome"
              class="img-fluid border rounded-2 p-2"
            />
          </h1>
          <form class="col-md-8 mt-4" @submit.prevent="signIn">
            <div class="form-floating px-2 mb-3">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="請輸入帳號"
                required
                autofocus
                v-model="user.username"
              />
              <label for="inputEmail">請輸入帳號</label>
            </div>
            <div class="form-floating position-relative px-2 mb-3">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="請輸入密碼"
                required
                v-model="user.password"
              />
              <label for="inputPassword">請輸入密碼</label>
              <img
                src="@/assets/img/icons/close.png"
                alt="close"
                width="18"
                class="position-absolute top-50 end-0 translate-middle-y me-4"
                ref="password"
                @click="showPassword()"
              />
            </div>
            <div class="text-end p-2">
              <button class="btn btn-outline-primary btn-block" type="submit">
                登入
              </button>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
import openImg from '@/assets/img/icons/open.png';
import closeImg from '@/assets/img/icons/close.png';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      // 顯示或隱藏密碼
      show: true,
      data: [],
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        // 登入成功，轉至後台頁面
        if (res.data.success) {
          const { token, expired } = res.data;
          // 儲存 Cookie
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          this.$router.push('/admin/index');
        }
      });
    },
    showPassword() {
      if (!this.show) {
        document.getElementById('inputPassword').type = 'text';
        this.$refs.password.src = openImg;
        this.show = true;
      } else {
        document.getElementById('inputPassword').type = 'password';
        this.$refs.password.src = closeImg;
        this.show = false;
      }
    },
  },
};
</script>
