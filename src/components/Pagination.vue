<template>
  <nav aria-label="Page navigation">
    <ul class="pagination pagination-sm justify-content-end mb-0">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(pages.current_page - 1)"
        >
          <span aria-hidden="true">
            <i class="bi bi-chevron-left"></i>
          </span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(pages.current_page + 1)"
        >
          <span aria-hidden="true">
            <i class="bi bi-chevron-right"></i>
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // :pages="{ 頁碼資訊 }"
  props: ['pages'],
  methods: {
    updatePage(page) {
      // @emitPages="更新頁面事件"
      this.$emit('emit-pages', page);
    },
  },
};
</script>
