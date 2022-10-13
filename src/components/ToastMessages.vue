<template>
  <!-- 定位 -->
  <div
    class="toast-container position-absolute pe-3 top-0 end-0"
    style="z-index: 99"
  >
    <!-- 以列表方式呈現 -->
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg"></Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: {
    Toast,
  },
  data() {
    return {
      messages: [],
    };
  },
  // 使用 mitt 套件
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      // 參數 message 由外層提供
      const { title, content } = message;
      // 變數 messages 推送至內部
      this.messages.push({ title, content });
    });
  },
};
</script>
