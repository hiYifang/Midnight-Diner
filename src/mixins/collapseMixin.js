// Collapse 所使用的相同原始碼
import Collapse from 'bootstrap/js/dist/collapse';

export default {
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse);
  },
};
