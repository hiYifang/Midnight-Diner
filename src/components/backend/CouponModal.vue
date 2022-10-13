<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content text-primary">
        <div class="p-3">
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-header align-items-center">
            <h5 class="modal-title fw-bold" id="couponModalLabel">優惠券</h5>
            <div class="switch-field">
              <input
                class="switch"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
                id="is_enabled"
              />
              <label for="is_enabled"></label>
            </div>
          </div>
          <div class="modal-body">
            <div class="mb-3 row">
              <label for="title" class="col col-form-label">
                <i class="bi bi-coin"></i> 名稱
              </label>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempCoupon.title"
                  placeholder="欄位必填"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="price" class="col col-form-label">
                <i class="bi bi-coin"></i> 折扣數
              </label>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  v-model.number="tempCoupon.percent"
                  placeholder="欄位必填"
                />
              </div>
            </div>
            <div class="row">
              <label for="coupon_code" class="col col-form-label">
                <i class="bi bi-coin"></i> 優惠碼
              </label>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="coupon_code"
                  v-model="tempCoupon.code"
                  placeholder="欄位必填"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer flex-nowrap justify-content-around bg-light">
          <input
            type="date"
            class="form-control w-60"
            id="due_date"
            v-model="due_date"
          />
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="$emit('update-coupon', tempCoupon)"
          >
            儲存
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
    innerCoupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    innerCoupon() {
      this.tempCoupon = this.innerCoupon;
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  emits: ['update-coupon'],
  mixins: [modalMixin],
};
</script>
