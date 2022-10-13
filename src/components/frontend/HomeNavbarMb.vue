<template>
  <!-- 手機版 -->
  <div
    class="d-block d-md-none position-relative"
    :class="isShow ? 'd-block' : 'd-none'"
  >
    <nav class="nav_menu">
      <input type="checkbox" class="nav_checkbox" id="menu-cb" />
      <div class="nav_content">
        <ul class="nav_items list-unstyled">
          <li class="nav_item">
            <a
              href="tel:07-1234-5678"
              class="nav_item-text link-light text-decoration-none"
            >
              <i class="bi bi-telephone"></i>
            </a>
          </li>
          <li class="nav_item">
            <router-link
              :to="{
                path: '/foods',
                query: { selectedCategory: 'all' },
              }"
              class="nav_item-text link-light text-decoration-none"
            >
              <i class="fas fa-utensils fa-fw"></i>
            </router-link>
          </li>
          <li class="nav_item">
            <router-link
              to="/cart/content"
              class="nav_item-text link-light text-decoration-none"
            >
              <i class="bi bi-cart"></i>
              <span class="goShopNum badge p-1"> {{ cartLen }} </span>
            </router-link>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_item-text link-light text-decoration-none">
              <i class="bi bi-arrow-up-circle-fill"></i>
            </a>
          </li>
        </ul>
      </div>
      <label class="nav_btn" for="menu-cb"></label>
    </nav>
  </div>
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
      isShow: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop
      || document.body.scrollTop
      || window.pageYOffset;
      if (top >= 100) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
};
</script>
