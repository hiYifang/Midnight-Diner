<template>
  <!-- fixed-top -->
  <header
    class="
      navbar navbar-expand-lg navbar-light
      fixed-top
      bg-white
    "
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/img/logo.png" alt="logo" width="120" height="60" />
      </router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavFrontend"
        aria-controls="navbarNavFrontend"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i class="fas fa-bars"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavFrontend">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-6 ms-3 ms-lg-0">
            <router-link to="/" class="nav-link"> 回到首頁 </router-link>
          </li>
          <li class="nav-item me-6 ms-3 ms-lg-0">
            <router-link
              :to="{
                path: '/foods',
                query: { selectedCategory: 'all' },
              }"
              class="nav-link"
            >
              餐券介紹
            </router-link>
          </li>
          <li class="nav-item ms-3 ms-lg-0">
            <router-link to="/cart/content" class="nav-link">
              選購列表
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    innerCartLen: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    innerCartLen() {
      this.cartLen = this.innerCartLen;
    },
  },
  data() {
    return {
      cartLen: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
$primary: #004c34;
$secondary: #be9c6d;
$light: #fbf8f6;
$dark: #000000;

.navbar-header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  .navbar-toggler {
    border: none;
    outline: none;

    i {
      color: $primary;
    }
  }

  .nav-link {
    border: none;
    outline: none;
    color: rgba($primary, 0.7);
    font-weight: 600;

    &.active {
      color: $primary;
      font-weight: 800;
    }

    &:hover {
      color: $secondary;
    }
  }
}

/* dekstop */
@media (min-width: 992px) {
  .navbar-header {
    .nav-link {
      margin-left: 2rem;

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        transition: width 0.3s;
      }

      &:hover::after {
        width: 50%;
        transition: width 0.3s;
      }
    }
  }
}
</style>
