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
    @click="openModal(true)"
  >
    <i class="bi bi-cloud-plus"></i>
  </button>
  <!-- 內容 -->
  <div class="container">
    <!-- 分頁 -->
    <Pagination class="mt-3" :pages="pagination" @emit-pages="getProducts"></Pagination>
    <!-- 表格 -->
    <div class="table-responsive my-4">
      <table
        class="table table-borderless table-hover"
        style="border-collapse: separate; border-spacing: 0 0.5rem"
      >
        <thead class="text-nowrap">
          <tr class="align-middle text-secondary">
            <th>商品名稱</th>
            <th>類別</th>
            <th>原價</th>
            <th>售價</th>
            <th>啟用狀態</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody class="text-nowrap">
          <tr
            class="align-middle bg-light shadow-sm"
            v-for="item in products"
            :key="item.id"
            :class="{ 'text-secondary': !item.is_enabled }"
          >
            <td class="rounded-start">{{ item.title }}</td>
            <td>{{ item.category }}</td>
            <td class="text-right">
              {{ $filters.currency(item.origin_price) }}
            </td>
            <td class="text-right">{{ $filters.currency(item.price) }}</td>
            <td>
              <i class="bi bi-check-lg text-primary" v-if="item.is_enabled"></i>
              <i class="bi bi-x-lg text-danger" v-else></i>
            </td>
            <td class="rounded-end">
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, item)"
                >
                  <i class="bi bi-pencil"></i>
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
  <ProductModal
    ref="productModal"
    :innerProduct="tempProduct"
    @update-product="updateProduct"
  />
  <DelModal ref="delModal" :innerItem="tempProduct" @del-item="delProduct" />
</template>

<script>
import ProductModal from '@/components/backend/ProductModal.vue';
import DelModal from '@/components/backend/DelModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  // 使用 mitt 套件
  inject: ['emitter'],
  data() {
    return {
      // 商品資訊
      products: [],
      // 分頁資訊
      pagination: {},
      // 新增單一商品資訊
      tempProduct: {},
      // 判斷新增或編輯
      isNew: false,
      // loading 效果
      isLoading: false,
    };
  },
  methods: {
    // 取得商品列表
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    // 開啟彈跳視窗，判斷新增或編輯
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增：商品建立
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯：修改產品
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      // 傳送商品資料
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.$refs.productModal.hideModal();
        this.getProducts();
        // Toasts 訊息 - 推送成功
        this.$httpMessageState(res, '更新產品');
      });
    },
    // 開啟彈跳視窗，刪除商品
    openDelModal(item) {
      this.tempProduct = { ...item };
      this.$refs.delModal.showModal();
    },
    delProduct() {
      // 刪除：刪除產品
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api).then((res) => {
        this.$refs.delModal.hideModal();
        this.getProducts();
        this.$httpMessageState(res, '刪除產品');
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
