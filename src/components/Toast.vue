<template>
  <!-- BS 模板：Toasts -->
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="toast-header" :class="msg.content ? '' : 'rounded-bottom'">
      <span class="p-2 rounded me-2 d-inline-block">
        <i class="bi bi-exclamation-circle text-danger" v-if="msg.content"></i>
        <i class="bi bi-check-circle text-secondary" v-else></i>
      </span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast;
    // 開啟 6 秒
    const toast = new Toast(toastEl, { delay: 6000 });
    toast.show();
  },
};
</script>
