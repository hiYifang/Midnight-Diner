<template>
  <!-- Loading 效果 -->
  <Loading :active="isLoading"></Loading>
  <!-- 內容 -->
  <div class="container">
    <!-- 分頁 -->
    <Pagination
      class="mt-3"
      :pages="pagination"
      @emit-pages="getOrders"
    ></Pagination>
    <!-- 表格 -->
    <div class="table-responsive my-4">
      <table
        class="table table-borderless table-hover"
        style="border-collapse: separate; border-spacing: 0 0.5rem"
      >
        <thead class="text-nowrap">
          <tr class="align-middle text-secondary">
            <th>訂單編號</th>
            <th>購買時間</th>
            <th>Email</th>
            <th>金額</th>
            <th>付款狀態</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody class="text-nowrap">
          <tr
            class="align-middle bg-light shadow-sm"
            v-for="item in orders"
            :key="item.id"
            :class="{ 'text-secondary': !item.is_paid }"
          >
            <td class="rounded-start">{{ item.id }}</td>
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>{{ $filters.currency(item.total) }}</td>
            <td>
              <i class="bi bi-check-lg text-primary" v-if="item.is_paid"></i>
              <i class="bi bi-x-lg text-danger" v-else></i>
            </td>
            <td class="rounded-end">
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, item)"
                >
                  <i class="bi bi-file-ruled"></i>
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelModal(item)"
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
  <OrderModal
    ref="orderModal"
    :innerOrder="tempOrder"
    @update-order="updateOrder"
  />
  <DelModal ref="delModal" :innerItem="tempOrder" @del-item="delOrder" />
</template>

<script>
import OrderModal from '@/components/backend/OrderModal.vue';
import DelModal from '@/components/backend/DelModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    OrderModal,
    DelModal,
    Pagination,
  },
  data() {
    return {
      orders: {},
      pagination: {},
      currentPage: 1,
      tempOrder: {},
      isNew: false,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    // 取得訂單列表
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        }
      });
    },
    // 開啟彈跳視窗，編輯訂單
    openModal(isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      this.$refs.orderModal.showModal();
    },
    // 修改訂單
    updateOrder(item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((res) => {
        this.$refs.orderModal.hideModal();
        this.getOrders(this.currentPage);
        this.$httpMessageState(res, '更新訂單');
      });
    },
    // 開啟彈跳視窗，刪除訂單
    openDelModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.showModal();
    },
    // 刪除訂單
    delOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http.delete(api).then((res) => {
        this.$refs.delModal.hideModal();
        this.getOrders(this.currentPage);
        this.$httpMessageState(res, '刪除訂單');
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
