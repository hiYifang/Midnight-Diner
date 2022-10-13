<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-light
      bg-light
      border-bottom border-2 border-primary
    "
  >
    <div class="container-fluid">
      <h1 class="mb-0">
        <router-link to="/admin/index" class="navbar-brand m-0 p-0">
          <img src="@/assets/img/logo.png" alt="logo" width="110" height="55" />
        </router-link>
      </h1>
      <div class="btn-group d-flex align-items-center" role="group">
        <router-link
          :to="item.to"
          class="menu btn btn-outline-primary btn-sm"
          v-for="(item, index) in dataList"
          :key="index"
          :class="index === current ? 'opacity-100' : 'opacity-50'"
          @click.prevent="bgColor(index)"
        >
          {{ item.name }}</router-link
        >
        <a
          href="#"
          class="btn btn-outline-primary btn-sm opacity-50"
          @click.prevent="signOut"
          >登出</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      dataList: [
        { name: '商品', to: '/admin/products' },
        { name: '優惠', to: '/admin/coupons' },
        { name: '訂單', to: '/admin/orders' },
      ],
    };
  },
  methods: {
    bgColor(index) {
      this.current = index;
    },
    signOut() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api).then((res) => {
        // 登入成功，轉至 Dashboard 頁面
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
