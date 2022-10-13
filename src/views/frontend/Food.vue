<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-light text-primary">
    <Header></Header>

    <section class="pt-8 pt-md-10">
      <div class="container">
        <div class="row mb-4 mb-md-5">
          <div class="col-md-7 col-lg-6 mb-3 mb-md-0">
            <div
              class="
                border border-4 border-primary
                overflow-hidden
                rounded-3
                shadow
                h-400
              "
            >
              <img
                :src="product.imageUrl"
                class="
                  img-fluid
                  w-100
                  h-100
                  object-fit-cover object-position-center
                "
                :alt="product.title"
              />
            </div>
          </div>
          <div class="col-md-5 col-lg-6">
            <h1 class="mb-1">{{ product.title }}</h1>
            <p>
              {{ product.description }}
            </p>
            <p class="badge rounded-pill bg-primary text-smaller ms-auto">
              {{ product.category }}
            </p>
            <ul class="deco-line list-unstyled">
              <li>貼心叮嚀：本店推廣餐券，歡迎使用</li>
              <li class="mb-1">使用食材：{{ product.content }}</li>
              <li>餐券期限：{{ deadlineFn }}</li>
            </ul>
            <p class="h2 py-3">NT{{ $filters.currency(product.price) }}</p>
            <div class="row">
              <div class="col-12">
                <div class="input-group">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    :disabled="qty <= 1"
                    @click="qty -= 1"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <input
                    type="number"
                    class="form-control border-primary text-primary text-center"
                    min="1"
                    v-model.number="qty"
                  />
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="qty += 1"
                  >
                    <i class="bi bi-plus-lg"></i>
                  </button>
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex justify-content-evenly mt-3">
                  <button
                    type="button"
                    class="btn btn-outline-primary flex-grow-1 me-3"
                    :disabled="loadingStatus === product.id || qty <= 0"
                    @click.prevent="addCart(product.title, product.id, qty)"
                  >
                    加入選購
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary flex-grow-1"
                    :disabled="loadingStatus === product.id || qty <= 0"
                    @click.prevent="goCheckout(product.title, product.id, qty)"
                  >
                    立即購買
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navs and tabs -->
        <div class="bg-white-opacity-80 rounded-3 p-4 my-3">
          <ul
            class="nav nav-pills nav-fill nav-border mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-use-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-use"
                type="button"
                role="tab"
                aria-controls="pills-use"
                aria-selected="true"
              >
                餐券使用方式
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-notice-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-notice"
                type="button"
                role="tab"
                aria-controls="pills-notice"
                aria-selected="false"
              >
                餐點注意事項
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-use"
              role="tabpanel"
              aria-labelledby="pills-use-tab"
              tabindex="0"
            >
              <ol class="list-group list-group-numbered">
                <li class="list-group-item border-0">
                  本券優惠已包含 10% 服務費。
                </li>
                <li class="list-group-item border-0">
                  本券優惠期間為訂購日期起算三天內。
                </li>
                <li class="list-group-item border-0">
                  本券優惠期間如遇價格調整仍可直接抵用。
                </li>
                <li class="list-group-item border-0">
                  本券於販售時已開立發票，兌換時恕不再開立發票。
                </li>
                <li class="list-group-item border-0">
                  本券經影印、塗改失效，且毀損致無法辨認者不得補發。
                </li>
                <li class="list-group-item border-0">
                  本券兌換前敬請事先來電訂位。
                </li>
              </ol>
            </div>
            <div
              class="tab-pane fade"
              id="pills-notice"
              role="tabpanel"
              aria-labelledby="pills-notice-tab"
              tabindex="0"
            >
              <ol class="list-group list-group-numbered">
                <li class="list-group-item border-0">
                  餐點為現點現做，為保食物品質，請儘早食用，隔餐勿食。
                </li>
                <li class="list-group-item border-0">
                  餐點內的蔬果，會隨著季節更替，若有疑慮歡迎來電洽詢。
                </li>
              </ol>
            </div>
          </div>
        </div>

        <!-- 加購專區 -->
        <div class="p-4 my-3">
          <h3 class="text-center mb-3">加購專區</h3>
          <div
            id="carouselControls"
            class="carousel carousel-dark slide w-100"
            data-bs-ride="carousel"
            data-bs-touch="false"
            data-bs-interval="false"
          >
            <div class="carousel-inner">
              <div
                :class="{ 'carousel-item': true, active: index === active }"
                v-for="(item, index) in filterMobileData"
                :key="item.id"
              >
                <div class="row d-flex d-md-none">
                  <div class="card-group col-12 col-md-4">
                    <div class="card h-100">
                      <img
                        :src="item.imageUrl"
                        class="
                          card-img
                          h-400
                          object-fit-cover object-position-center
                        "
                        :alt="item.id"
                      />
                      <div class="card-body">
                        <h5 class="card-title fw-bold">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                      </div>
                      <div class="card-footer d-flex">
                        <button
                          type="button"
                          class="btn btn-secondary w-100 btn-sm text-light"
                          @click="addCart(item.title, item.id)"
                        >
                          {{ $filters.currency(item.price) }}/ 1
                          {{ item.unit }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row d-none d-md-flex">
                  <div
                    class="card-group col-12 col-md-4"
                    v-for="(obj, i) in filterData"
                    :key="obj[i].id"
                  >
                    <div class="card h-100 position-relative">
                      <img
                        :src="obj[i].imageUrl"
                        class="
                          card-img
                          h-400
                          object-fit-cover object-position-center
                        "
                        :alt="obj[i].id"
                        @click.prevent="goProduct(obj[i].id)"
                      />
                      <div class="card-body">
                        <h5 class="card-title fw-bold">{{ obj[i].title }}</h5>
                        <p class="card-text">{{ obj[i].description }}</p>
                      </div>
                      <div class="card-footer d-flex">
                        <button
                          type="button"
                          class="btn btn-secondary w-100 btn-sm text-light"
                          @click.prevent="addCart(obj[i].title, obj[i].id)"
                        >
                          {{ $filters.currency(obj[i].price) }}/ 1
                          {{ obj[i].unit }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselControls"
              data-bs-slide="prev"
              @click="setActive(active - 1)"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselControls"
              data-bs-slide="next"
              @click="setActive(active + 1)"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>

    <!-- 購物按鈕 -->
    <button
      type="button"
      class="btn btn-sm btn-outline-secondary btn-cart rounded-pill"
      @click="change('isShow')"
    >
      <i class="bi bi-cart h2"></i>
    </button>
    <div class="modal-cart" :class="{ active: isShow }">
      <div v-if="cartLen < 1">
        <div class="d-flex flex-column align-items-center">
          <p class="text-secondary my-2">購物車內沒有商品唷</p>
          <router-link
            :to="{
              path: '/foods',
              query: { selectedCategory: 'all' },
            }"
            role="button"
            class="btn close-modal"
          >
            前往購物
          </router-link>
        </div>
      </div>
      <div v-else class="d-flex flex-column align-items-center">
        <div class="table-group">
          <table class="table table-sm table-hover align-middle m-0">
            <thead>
              <tr>
                <th scope="col" colspan="3">名稱</th>
                <th scope="col">小計</th>
                <th scope="col">數量</th>
                <th scope="col" class="text-end">取消</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id" class="mb-3">
                <td class="border-0" colspan="3">{{ item.product.title }}</td>
                <td class="border-0">
                  {{ $filters.currency(item.product.price) }}
                </td>
                <td class="border-0 w-35">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    :disabled="loadingStatus === item.id"
                    @change="updateCart(item)"
                    v-model.number="item.qty"
                  />
                </td>
                <td class="text-end border-0">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    :disabled="loadingStatus === item.id"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-x"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="border-0">總計</td>
                <td colspan="2" class="text-end border-0">
                  {{ $filters.currency(cart.total) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <router-link
          :to="`/cart/content`"
          role="button"
          class="btn close-modal"
        >
          前往結帳
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/frontend/Header.vue';
import Footer from '@/components/frontend/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      // 加購專區
      filterData: [],
      filterMobileData: [],
      active: 0,
      // 單一商品
      product: {},
      // 購買數量
      qty: 1,
      // 購物車
      cart: {},
      cartLen: 0,
      // loading 效果
      isLoading: false,
      // 防止再次點擊，對應產品 id
      loadingStatus: '',
      // 是否顯示 modal-cart
      isShow: false,
    };
  },
  watch: {
    $route() {
      this.getProduct();
    },
  },
  methods: {
    // 取得商品列表
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.filterMobileData = res.data.products.filter((item) => item.category === '加購專區');
          for (let i = 0; i < 3; i += 1) {
            this.filterData.push(this.filterMobileData);
          }
        }
      });
    },
    // 取得單一商品
    getProduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.foodId}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.product = res.data.product;
        }
      });
    },
    // 進入付款頁面
    goCheckout(title, id, qty) {
      this.$router.push('/cart/content');

      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      // 準備資料
      const cart = {
        product_id: id,
        qty: qty >= 1 ? qty : 1,
      };
      // 關閉按鈕，避免重複觸發
      this.loadingStatus = id;

      this.$http.post(api, { data: cart }).then(() => {
        this.loadingStatus = '';
      });
      this.getCart();
    },
    // 加入購物車
    addCart(title, id, qty) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      // 準備資料
      const cart = {
        product_id: id,
        qty: qty >= 1 ? qty : 1,
      };
      // 關閉按鈕，避免重複觸發
      this.loadingStatus = id;

      this.$http.post(api, { data: cart }).then(() => {
        this.loadingStatus = '';
        this.getCart();
        this.$swal({
          icon: 'success',
          title: `成功購入 ${title}！`,
        });
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
    // 更新購物
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      // 準備資料
      const cart = {
        product_id: item.product_id,
        qty: item.qty >= 1 ? item.qty : 1,
      };
      // 關閉按鈕，避免重複觸發
      this.loadingStatus = item.id;
      this.$http.put(api, { data: cart }).then(() => {
        this.loadingStatus = '';
        this.getCart();
      });
    },
    // 刪除某一筆購物車資料
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      // 關閉按鈕，避免重複觸發
      this.loadingStatus = id;
      this.$http.delete(api).then(() => {
        this.loadingStatus = '';
        this.getCart();
      });
    },
    // 是否顯示 modal-cart
    change(key) {
      this[key] = !this[key];
    },
    // 輪播
    setActive(index) {
      let active = index;

      if (index === this.filterData.length) {
        active = 0;
      } else if (index === -1) {
        active = this.filterData.length - 1;
      }

      this.active = active;
    },
  },
  computed: {
    // 餐券期限 3 天
    deadlineFn() {
      let deadline = '';
      const today = new Date();
      const days = 4;
      today.setDate(today.getDate() + days);

      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate() - 1;

      // 月份大於 12，年就 +1
      if (month > 12) {
        year += 1;
        month -= 12;
      }
      // 若月份是 1~9 就補 0
      if (month < 10) {
        month = `0${month}`;
      }
      // 若日期是 1~9 就補 0
      if (day < 10) {
        day = `0${day}`;
      }

      deadline = `${year}/${month}/${day}`;
      return deadline;
    },
  },
  created() {
    this.getProducts();
    this.getProduct();
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
$primary: #004c34;
$secondary: #be9c6d;
$light: #fbf8f6;
$white: #ffffff;

.deco-line {
  padding-left: 1rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3px;
    background-color: $primary;
  }
}

/* Navs and tabs */
.nav-border {
  border-bottom: 1px solid $primary;
}

.nav-pills {
  .nav-link {
    color: $primary;
    background-color: rgba($white, 0.8);
    border-radius: 0;
    &.active {
      color: $secondary;
      border-bottom: 3px solid $secondary;
    }
  }
}

/* 加購專區 */
.carousel-inner {
  padding: 1em;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: $secondary;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  span {
    width: 1.5rem;
    height: 1.5rem;
  }
}

/* 購物按鈕 */
.btn-cart {
  position: fixed;
  z-index: 2;
  right: 22px;
  bottom: 15px;
  width: 4rem;
  height: 4rem;
}

.modal-cart {
  position: fixed;
  z-index: 3;
  right: 22px;
  bottom: 90px;
  max-width: 17rem;
  padding: 0.5rem 1rem;
  background-color: lighten($secondary, 25%);
  border-radius: 4px;
  border-top: 4px solid currentColor;
  box-shadow: 0 2px 7px -5px currentColor;
  opacity: 0;
  visibility: hidden;
  transform: translateY(3rem);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.modal-cart .close-modal {
  font-weight: bold;
  color: inherit;
  background: none;
  border: 2px solid currentColor;
  border-radius: 30px;
  padding: 0.5rem 0.75rem;
  margin: 1rem;
  transition: transform 0.1s ease-out;

  &:hover,
  &:focus {
    transform: translateY(-2px);
  }
}

// 列表
.table-group {
  height: 10.5rem;
  overflow-x: auto;
  padding: 0.25rem;

  &::-webkit-scrollbar-track {
    background-color: $white;
    border-radius: 0.125rem;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: $white;
    border-radius: 0.125rem;
  }

  &::-webkit-scrollbar-thumb {
    background: $primary;
    border-radius: 0.125rem;
  }
}

.table > :not(caption) > * > * {
  padding: 0.5rem 0.25rem;
}
</style>
