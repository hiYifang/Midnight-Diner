<template>
  <Loading :active="isLoading"></Loading>

  <div class="container">
    <!-- 進度條 -->
    <ul class="list-unstyled d-flex d-md-none justify-content-center p-0 m-0">
      <li class="step-item rounded-start">
        <span>
          <i class="bi bi-pen"></i>
          <strong class="ms-1">填寫</strong>
        </span>
      </li>
      <li class="step-item active">
        <span>
          <i class="bi bi-envelope"></i>
          <strong class="ms-1">確認</strong>
        </span>
      </li>
      <li class="step-item rounded-end">
        <span>
          <i class="bi bi-send-check"></i>
          <strong class="ms-1">完成</strong>
        </span>
      </li>
    </ul>
    <div class="row row-cols-1 row-cols-md-2 flex-md-row-reverse g-4">
      <!-- 購物清單 -->
      <div class="col">
        <div class="card bg-light bg-md-white border border-0">
          <div class="card-body pb-0 pb-md-3">
            <div class="table-responsive mt-3">
              <table class="table align-middle m-0">
                <thead>
                  <tr>
                    <th class="text-start">已選購</th>
                    <th class="text-end text-secondary" colspan="2">
                      <small>
                        <i class="bi bi-exclamation-diamond"></i>
                        使用期限至 {{ $filters.date(deadline) }}
                      </small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.qty }} / 張 ({{ item.product.unit }})</td>
                    <td class="text-end">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <td colspan="2" class="py-2 ps-2">總計</td>
                  <td class="text-end pe-2">{{ $filters.currency(order.total) }}</td>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="card bg-light bg-md-white border border-0">
          <div class="card-body pt-0 pt-md-3">
            <div class="d-flex flex-column">
              <!-- 進度條 -->
              <ul
                class="
                  list-unstyled
                  d-none d-md-flex
                  justify-content-center
                  p-0
                  m-0
                "
              >
                <li class="step-item rounded-start">
                  <span>
                    <i class="bi bi-pen"></i>
                    <strong class="ms-1">填寫</strong>
                  </span>
                </li>
                <li class="step-item active">
                  <span>
                    <i class="bi bi-envelope"></i>
                    <strong class="ms-1">確認</strong>
                  </span>
                </li>
                <li class="step-item rounded-end">
                  <span>
                    <i class="bi bi-send-check"></i>
                    <strong class="ms-1">完成</strong>
                  </span>
                </li>
              </ul>
              <!-- 表單 -->
              <div class="text-primary">
                <h2 class="title-about h4 text-center">收件訊息</h2>
                <form @submit.prevent="payOrder">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>姓名</th>
                        <td>{{ order.user.name }}</td>
                      </tr>
                      <tr>
                        <th>電話</th>
                        <td>{{ order.user.tel }}</td>
                      </tr>
                      <tr>
                        <th>地址</th>
                        <td>{{ order.user.address }}</td>
                      </tr>
                      <tr>
                        <th width="100">Email</th>
                        <td>{{ order.user.email }}</td>
                      </tr>
                      <tr>
                        <th>付款方式</th>
                        <td>{{ payment_method }}</td>
                      </tr>
                      <tr v-if="order.message">
                        <th>留言</th>
                        <td>{{ order.message }}</td>
                      </tr>
                      <tr v-if="order.is_paid === false">
                        <th>付款狀態</th>
                        <td>尚未付款</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-end" v-if="order.is_paid === false">
                    <button class="btn btn-primary">付款</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 單一訂單
      orderId: '',
      order: {
        user: {},
      },
      payment_method: '',
      deadline: 0,
      // loading 效果
      isLoading: false,
    };
  },
  methods: {
    // 取得某一筆訂單
    getOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.order = res.data.order;
          // 3 天的毫秒
          const min = 60;
          const hour = min * 60;
          const day = hour * 24;
          this.deadline = this.order.create_at + day * 3;
        }
      });
    },
    // 結帳付款
    payOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.$router.push('/cart/ispaid');
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.payment_method = this.$route.params.payment;
    this.getOrder();
  },
};
</script>
