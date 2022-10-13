// Modal 所使用的相同原始碼
import Modal from 'bootstrap/js/dist/modal';

export default {
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    // this.modal 為 data 內的變數
    // new Modal 為 Bootstrap JS 內的檔案
    // this.$refs.modal 透過 ref 所存取的 DOM 元素
    this.modal = new Modal(this.$refs.modal);
  },
};
