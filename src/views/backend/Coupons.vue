<template>
  <!-- Loading 效果 -->
  <Loading :active="isLoading"></Loading>
  <!-- 按鈕 -->
  <button
    type="button"
    class="
      btn btn-primary
      rounded-circle
      position-fixed
      bottom-0
      end-0
      m-3
    "
    @click="openCouponModal(true)"
  >
    <i class="bi bi-plus"></i>
  </button>
  <!-- 內容 -->
  <div class="container">
    <!-- 分頁 -->
    <Pagination
      class="mt-3"
      :pages="pagination"
      @emit-pages="getCoupons"
    ></Pagination>
    <!-- 表格 -->
    <div class="table-responsive my-4">
      <table
        class="table table-borderless table-hover"
        style="border-collapse: separate; border-spacing: 0 0.5rem"
      >
        <thead class="text-nowrap">
          <tr class="align-middle text-secondary">
            <th>優惠卷名稱</th>
            <th>折扣數</th>
            <th>到期日</th>
            <th>啟用狀態</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody class="text-nowrap">
          <tr
            class="align-middle bg-light shadow-sm"
            v-for="(item, key) in coupons"
            :key="key"
            :class="{ 'text-secondary': item.is_enabled === 0 }"
          >
            <td class="rounded-start">{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filters.date(item.due_date) }}</td>
            <td>
              <i
                class="bi bi-check-lg text-primary"
                v-if="item.is_enabled === 1"
              ></i>
              <i class="bi bi-x-lg text-danger" v-else></i>
            </td>
            <td class="rounded-end">
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openCouponModal(false, item)"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelCouponModal(item)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- 透過 ref 存取 DOM 元素，透過 props 傳遞資料 -->
  <CouponModal
    ref="couponModal"
    :innerCoupon="tempCoupon"
    @update-coupon="updateCoupon"
  />
  <DelModal ref="delModal" :innerItem="tempCoupon" @del-item="delCoupon" />
</template>

<script>
import CouponModal from '@/components/backend/CouponModal.vue';
import DelModal from '@/components/backend/DelModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    CouponModal,
    DelModal,
    Pagination,
  },
  inject: ['emitter'],
  data() {
    return {
      coupons: {},
      pagination: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    // 取得優惠券列表
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        }
      });
    },
    // 開啟彈跳視窗，判斷新增或編輯
    openCouponModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      this.$refs.couponModal.showModal();
    },
    // 修改優惠券
    updateCoupon(tempCoupon) {
      // 新增：建立優惠券
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      // 編輯：修改優惠券
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        httpMethod = 'put';
      }
      // 傳送優惠卷資料
      this.$http[httpMethod](api, { data: tempCoupon }).then((res) => {
        this.$refs.couponModal.hideModal();
        this.getCoupons();
        // Toasts 訊息 - 推送成功
        this.$httpMessageState(res, '更新優惠券');
      });
    },
    // 開啟彈跳視窗，刪除優惠卷
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.delModal.showModal();
    },
    // 刪除優惠券
    delCoupon() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.$http.delete(api).then((res) => {
        this.$refs.delModal.hideModal();
        this.getCoupons();
        this.$httpMessageState(res, '刪除優惠券');
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
