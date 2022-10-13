<template>
  <!-- 桌面版 -->
  <nav class="nav-position bg-light text-primary">
    <ul class="nav-ul list-unstyled border border-primary bg-primary h6">
      <li>
        <a href="tel:07-1234-5678" class="link-light text-decoration-none">
          <i class="bi bi-telephone"></i>
        </a>
      </li>
      <li>
        <router-link
          :to="{
            path: '/foods',
            query: { selectedCategory: 'all' },
          }"
          class="link-light text-decoration-none"
        >
          <i class="fas fa-utensils fa-fw"></i>
        </router-link>
      </li>
      <li class="position-relative mt-3 m-md-0">
        <router-link to="/cart/content" class="link-light text-decoration-none">
          <i class="bi bi-cart"></i>
          <span
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              badge
              rounded-pill
              text-primary
              bg-secondary
              p-1
            "
            >{{ cartLen }}
          </span>
        </router-link>
      </li>
    </ul>
    <p class="nav-p border border-primary text-writing">
      僅供學習使用，無商業用途
    </p>
  </nav>
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
