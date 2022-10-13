<template>
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content text-center text-primary">
        <div class="modal-header flex-column border-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <img
            src="@/assets/img/icons/delModal.png"
            class="img-fluid w-50 mb-4"
            alt="del"
          />
          <h5 class="modal-title fw-bold text-danger" id="delModalLabel">
            確認刪除 <span class="text-primary">{{ innerItem.title || innerItem.id }}</span> ？
          </h5>
        </div>
        <div class="modal-body py-0">
          <p class="fs-static-14 text-secondary mb-0">
            <i class="bi bi-exclamation-diamond"></i>
            刪除後將無法恢復
          </p>
        </div>
        <div class="modal-footer flex-nowrap justify-content-center border-0">
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('del-item')"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    innerItem: {},
  },
  data() {
    return {
      modal: {},
    };
  },
  mixins: [modalMixin],
};
</script>
