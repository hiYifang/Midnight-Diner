<template>
  <Loading :active="isLoading"></Loading>
  <div class="container" v-if="cartLen > 0">
    <!-- 進度條 -->
    <ul class="list-unstyled d-flex d-md-none justify-content-center p-0 m-0">
      <li class="step-item rounded-start active">
        <span>
          <i class="bi bi-pen"></i>
          <strong class="ms-1">填寫</strong>
        </span>
      </li>
      <li class="step-item">
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
    <div
      class="row row-cols-1 row-cols-md-2 flex-md-row-reverse g-4"
      v-if="cartLen > 0"
    >
      <!-- 購物清單 -->
      <div class="col mb-0 mb-md-3">
        <div class="card bg-light bg-md-white border border-0">
          <div class="card-body pb-0 pb-md-3">
            <router-link
              :to="{
                path: '/foods',
                query: { selectedCategory: 'all' },
              }"
              role="button"
              class="card-link link-secondary text-decoration-none"
            >
              <i class="bi bi-chevron-left"></i> 繼續購物
            </router-link>
            <div
              class="table-responsive mt-3"
              :style="cartLen > 2 ? 'max-height: 400px' : ''"
            >
              <table class="table align-middle m-0">
                <thead>
                  <tr>
                    <th>選購內容</th>
                    <th class="text-end" colspan="2">
                      已選購 {{ cartLen }} 項
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td style="width: 100px">
                      <div
                        class="
                          bg-cover
                          border border-4 border-primary
                          rounded-3
                        "
                        style="height: 100px"
                        :style="{
                          backgroundImage: `url(${item.product.imageUrl})`,
                        }"
                      ></div>
                    </td>
                    <td>
                      <div class="d-flex flex-column">
                        <span>{{ item.product.title }}</span>
                        <span
                          >NT{{ $filters.currency(item.product.price) }}</span
                        >
                        <div
                          :class="
                            cart.final_total !== cart.total
                              ? 'text-secondary'
                              : 'text-primary'
                          "
                        >
                          小計 {{ $filters.currency(item.final_total) }}
                        </div>
                        <div
                          class="input-group align-items-center input-group-sm"
                        >
                          <input
                            type="number"
                            class="form-control"
                            min="1"
                            :disabled="item.id === status.ItemIsLoding"
                            @change="updateCart(item)"
                            v-model.number="item.qty"
                          />
                          <div class="input-group-text">
                            / 張 ({{ item.product.unit }})
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-end">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        :disabled="status.ItemIsLoding === item.id"
                        @click="removeCartItem(item.id)"
                      >
                        <i class="bi bi-x"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3">
                      <div class="input-group input-group-sm">
                        <input
                          type="text"
                          class="form-control"
                          v-model="coupon_code"
                          placeholder="請輸入優惠碼"
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-outline-secondary rounded-end"
                            type="button"
                            @click="addCouponCode"
                          >
                            {{
                              coupon_code === "BEST"
                                ? "套用會員優惠"
                                : coupon_code === "CARD"
                                ? "套用會員優惠"
                                : "套用優惠碼"
                            }}
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      class="text-end"
                      :class="
                        cart.final_total !== cart.total
                          ? 'border-bottom'
                          : 'border border-0'
                      "
                    >
                      總計
                    </td>
                    <td
                      class="text-end border border-0"
                      :class="
                        cart.final_total !== cart.total
                          ? 'border-bottom'
                          : 'border border-0'
                      "
                    >
                      {{ $filters.currency(cart.total) }}
                    </td>
                  </tr>
                  <tr v-if="cart.final_total !== cart.total">
                    <td
                      colspan="2"
                      class="text-end text-secondary border border-0"
                    >
                      折扣價
                    </td>
                    <td class="text-end text-secondary border border-0">
                      {{ $filters.currency(cart.final_total) }}
                    </td>
                  </tr>
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
                <li class="step-item rounded-start active">
                  <span>
                    <i class="bi bi-pen"></i>
                    <strong class="ms-1">填寫</strong>
                  </span>
                </li>
                <li class="step-item">
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
                <h2 class="title-about h4 text-center">收件資料</h2>
                <Form v-slot="{ errors }" @submit="createOrder">
                  <div class="row g-2">
                    <div class="col-md mb-3">
                      <div class="form-floating">
                        <Field
                          id="name"
                          name="姓名"
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': errors['姓名'] }"
                          placeholder="請輸入姓名"
                          rules="required"
                          v-model="form.user.name"
                        ></Field>
                        <ErrorMessage
                          name="姓名"
                          class="invalid-feedback"
                        ></ErrorMessage>
                        <label for="name"> 姓名 </label>
                      </div>
                    </div>
                    <div class="col-md mb-3">
                      <div class="form-floating">
                        <Field
                          id="tel"
                          name="電話"
                          type="tel"
                          class="form-control"
                          :class="{ 'is-invalid': errors['電話'] }"
                          placeholder="請輸入電話"
                          rules="required"
                          v-model="form.user.tel"
                        ></Field>
                        <ErrorMessage
                          name="電話"
                          class="invalid-feedback"
                        ></ErrorMessage>
                        <label for="tel"> 電話 </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-floating mb-3">
                    <Field
                      id="address"
                      name="地址"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['地址'] }"
                      placeholder="請輸入地址"
                      rules="required"
                      v-model="form.user.address"
                    ></Field>
                    <ErrorMessage
                      name="地址"
                      class="invalid-feedback"
                    ></ErrorMessage>
                    <label for="address"> 地址 </label>
                  </div>

                  <div class="form-floating mb-3">
                    <Field
                      id="email"
                      name="信箱"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors['信箱'] }"
                      placeholder=" 請輸入 Email"
                      rules="email|required"
                      v-model="form.user.email"
                    ></Field>
                    <ErrorMessage
                      name="信箱"
                      class="invalid-feedback"
                    ></ErrorMessage>
                    <label for="email"> Email </label>
                  </div>

                  <div class="row g-2">
                    <div class="col-md mb-3">
                      <div class="form-floating">
                        <select
                          class="form-select"
                          id="payment"
                          v-model="form.payment_method"
                        >
                          <option value="Visa">Visa</option>
                          <option value="LinePay">LinePay</option>
                          <option value="Paypal">Paypal</option>
                        </select>
                        <label for="payment">付款方式</label>
                      </div>
                    </div>
                    <div class="col-md mb-3">
                      <div class="form-floating">
                        <textarea
                          name=""
                          id="message"
                          class="form-control"
                          placeholder="請留下寶貴的建議"
                          v-model="form.message"
                        ></textarea>
                        <label for="message"> 留言 </label>
                      </div>
                    </div>
                  </div>

                  <div class="text-end">
                    <button class="btn btn-primary" type="submit">
                      送出訂單
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 無購物內容 -->
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    style="min-height: 60vh"
    v-else
  >
    <p class="text-secondary my-2">購物車內沒有商品!</p>
    <router-link
      :to="{
        path: '/foods',
        query: { selectedCategory: 'all' },
      }"
      role="button"
      class="btn btn-outline-primary my-2"
    >
      前往購物
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 商品列表
      products: [],
      // 購物車
      cart: {},
      cartLen: 0,
      // 優惠卷
      coupon_code: '',
      // 表單
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
        payment_method: 'creditCard',
      },
      // loading 效果
      isLoading: false,
      status: {
        // 對應產品 id
        ItemIsLoding: '',
      },
    };
  },
  methods: {
    // 取得商品列表
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
      });
    },
    // 取得購物車列表
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.cart = res.data.data;
        this.cartLen = res.data.data.carts.length;
      });
    },
    // 更新購物車
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      // 準備資料
      const cart = {
        product_id: item.product_id,
        qty: item.qty >= 1 ? item.qty : 1,
      };
      // 關閉按鈕，避免重複觸發
      this.status.ItemIsLoding = item.id;
      this.$http.put(api, { data: cart }).then(() => {
        this.status.ItemIsLoding = '';
        this.getCart();
      });
    },
    // 刪除某一筆購物車資料
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      // 關閉按鈕，避免重複觸發
      this.status.ItemIsLoding = id;
      this.$http.delete(api).then(() => {
        this.status.ItemIsLoding = '';
        this.getCart();
      });
    },
    // 套用優惠卷
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then(() => {
        this.isLoading = false;
        this.getCart();
      });
    },
    // 結帳頁面
    createOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      const payment = this.form.payment_method;
      this.$http.post(api, { data: order }).then((res) => {
        // 登入成功，轉至付款頁面
        if (res.data.success) {
          this.getOrders(payment);
        }
      });
    },
    // 取得訂單列表
    getOrders(payment) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          const orderId = res.data.orders[0].id;
          this.$router.push({
            name: 'pay',
            params: {
              orderId,
              payment,
            },
          });
        }
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
  mounted() {
    this.getCart();
  },
};
</script>
