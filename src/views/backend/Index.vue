<template>
  <!-- Loading 效果 -->
  <Loading :active="isLoading"></Loading>
  <div class="container p-4">
    <div class="row g-4 mb-4">
      <!-- 左側 -->
      <div class="col-lg-4">
        <div class="row row-cols-1 g-4 text-secondary">
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body text-end">
                <h2 class="h3">
                  第
                  <span class="text-primary">{{
                    pagination.current_page
                  }}</span>
                  頁
                  未付款訂單數
                </h2>
                <p class="display-4 mb-0">{{ noPaidNum }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body text-end">
                <h2 class="h3">
                  第
                  <span class="text-primary">{{
                    pagination.current_page
                  }}</span>
                  頁
                  已付款訂單數
                </h2>
                <p class="display-4 text-primary mb-0">{{ paidNum }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body text-end">
                <h2 class="h3">
                  第
                  <span class="text-primary">{{
                    pagination.current_page
                  }}</span>
                  頁 營業額
                </h2>
                <p class="text-primary mb-0">
                  <span class="fs-3">NT$</span
                  ><span class="display-4">{{ paidMoney }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右側 -->
      <div class="col-lg-8">
        <!-- 圖表 -->
        <div class="card shadow-sm mb-4" v-if="chartData.length">
          <div class="card-body">
            <LineChart
              label="營業額"
              :chartData="chartData"
              :options="chartOptions"
              :chartColorOptions="{
                borderColor: '#EF5350',
                backgroundColor: 'rgba(255, 56, 96, 0.1)',
              }"
            />
          </div>
        </div>
        <div class="card shadow-sm">
          <!-- 搜尋列 -->
          <div class="card-header bg-transparent">
            <div class="input-group">
              <span class="input-group-text border-0 bg-transparent pe-0">
                <i class="bi bi-search"></i>
              </span>
              <input
                type="search"
                class="form-control border-0 shadow-none"
                placeholder="請輸入用戶"
                v-model="search"
              />
            </div>
          </div>
          <!-- 表格內容 -->
          <div class="card-body p-0">
            <div
              class="table-responsive"
              :style="searchData.length > 2 ? 'max-height: 250px' : ''"
            >
              <table class="table table-hover mb-0">
                <thead class="text-nowrap bg-light">
                  <tr class="align-middle text-secondary">
                    <th scope="col" class="py-3 ps-4">訂單編號</th>
                    <th scope="col">Email</th>
                    <th scope="col">用戶</th>
                    <th scope="col">購買款項</th>
                    <th scope="col">付款狀態</th>
                    <th scope="col" class="pe-4">金額</th>
                  </tr>
                </thead>
                <tbody class="text-nowrap">
                  <tr
                    v-for="(item, key) in searchData"
                    :key="key"
                    :class="{ 'text-secondary': !item.is_paid }"
                  >
                    <td scope="row" class="ps-4">{{ item.id }}</td>
                    <td>
                      <span v-text="item.user.email" v-if="item.user"></span>
                    </td>
                    <td>
                      <span v-text="item.user.name" v-if="item.user"></span>
                    </td>
                    <td>
                      <ul class="list-unstyled">
                        <li v-for="(product, i) in item.products" :key="i">
                          <i class="bi bi-record2"></i>
                          {{ product.product.title }}
                          <i class="bi bi-asterisk fs-6"></i>
                          {{ product.qty }}
                          {{ product.product.unit }}
                        </li>
                      </ul>
                    </td>
                    <td>
                      <i
                        class="bi bi-check-lg text-primary"
                        v-if="item.is_paid"
                      ></i>
                      <i class="bi bi-x-lg text-danger" v-else></i>
                    </td>
                    <td>{{ item.total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 分頁 -->
          <div class="card-footer bg-transparent">
            <Pagination
              :pages="pagination"
              @emit-pages="getOrders"
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/backend/LineChart.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    LineChart,
    Pagination,
  },
  data() {
    return {
      orders: [],
      paidNum: 0,
      paidMoney: 0,
      noPaidNum: 0,
      pagination: {},
      currentPage: 1,
      isLoading: false,
      // 圖表
      chartData: [],
      chartOptions: {
        // 圖表的額外設定 - 響應式
        responsive: true,
        // 圖表的額外設定 - 用於設定縮放時是否維持 canvas 的大小
        maintainAspectRatio: false,
      },
      // 搜尋
      search: '',
    };
  },
  methods: {
    // 取得訂單列表
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.paidNum = 0;
          this.paidMoney = 0;
          this.noPaidNum = 0;
          const result = this.orders.filter((item) => item.is_paid === true);
          this.paidNum = result.length;
          this.noPaidNum = this.orders.length - this.paidNum;
          result.forEach((item) => {
            // 圖表
            const date = this.$filters.date(item.paid_date);
            const { total } = item;
            this.chartData.push({ date, total });
            this.paidMoney += item.total;
          });
        }
      });
    },
  },
  computed: {
    // 過濾資料
    searchData() {
      const vm = this;
      if (vm.search !== '') {
        return vm.orders.filter((item) => item.user.name.match(vm.search));
      }
      return vm.orders;
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
