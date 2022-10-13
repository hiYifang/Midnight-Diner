<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-light text-primary">
    <Header></Header>
    <!-- banner -->
    <div
      class="
        bg-cover
        d-flex
        justify-content-center justify-content-md-end
        align-items-center align-items-md-end
        p-0 p-md-5
      "
      style="height: 400px"
      :style="{
        backgroundImage: 'url(' + require('@/assets/img/foods.jpg') + ')',
      }"
    >
      <div class="text-light text-center bg-opacity p-3">
        <p class="fs-5">你是否也曾幻想</p>
        <h1 class="fw-bold">半夜吃宵夜？</h1>
        <p>
          深夜時刻溫暖你的胃！<br />
          一券在手，美味無窮！
        </p>
      </div>
    </div>

    <!-- menu -->
    <nav class="position-relative bg-white">
      <div class="container border-wave py-3">
        <ul
          class="nav nav-pills justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              :class="{ active: btnCategory === 'all' }"
              @click.prevent="btnCategory = 'all'"
            >
              所有商品
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-only-tab"
              data-toggle="pill"
              href="#pills-only"
              role="tab"
              aria-controls="pills-only"
              aria-selected="false"
              :class="{ active: btnCategory === '一人獨享' }"
              @click.prevent="btnCategory = '一人獨享'"
            >
              一人獨享
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-couple-tab"
              data-toggle="pill"
              href="#pills-couple"
              role="tab"
              aria-controls="pills-couple"
              aria-selected="false"
              :class="{ active: btnCategory === '兩人專屬' }"
              @click.prevent="btnCategory = '兩人專屬'"
            >
              兩人專屬
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-team-tab"
              data-toggle="pill"
              href="#pills-team"
              role="tab"
              aria-controls="pills-team"
              aria-selected="false"
              :class="{ active: btnCategory === '多人共享' }"
              @click.prevent="btnCategory = '多人共享'"
            >
              多人共享
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-festival-tab"
              data-toggle="pill"
              href="#pills-festival"
              role="tab"
              aria-controls="pills-festival"
              aria-selected="false"
              :class="{ active: btnCategory === '歡慶開幕' }"
              @click.prevent="btnCategory = '歡慶開幕'"
            >
              歡慶開幕
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-limit-tab"
              data-toggle="pill"
              href="#pills-limit"
              role="tab"
              aria-controls="pills-limit"
              aria-selected="false"
              :class="{ active: btnCategory === '當季限定' }"
              @click.prevent="btnCategory = '當季限定'"
            >
              當季限定
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-new-tab"
              data-toggle="pill"
              href="#pills-new"
              role="tab"
              aria-controls="pills-new"
              aria-selected="false"
              :class="{ active: btnCategory === '最新上架' }"
              @click.prevent="btnCategory = '最新上架'"
            >
              最新上架
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-foods-link"
              id="pills-addon-tab"
              data-toggle="pill"
              href="#pills-addon"
              role="tab"
              aria-controls="pills-addon"
              aria-selected="false"
              :class="{ active: btnCategory === '加購專區' }"
              @click.prevent="btnCategory = '加購專區'"
            >
              加購專區
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 搜尋功能 -->
    <nav class="container my-4">
      <div
        class="
          d-flex
          justify-content-center justify-content-md-end
          align-items-center
        "
      >
        <div class="input-group w-search">
          <input
            type="search"
            class="form-control"
            id="word"
            placeholder="好吃的宵夜"
            v-model.trim="search"
          />
          <span class="input-group-text bg-primary text-light" for="word">
            <i class="bi bi-search"></i>
            找找需求
          </span>
        </div>
      </div>
      <p
        class="form-text text-danger d-flex justify-content-center justify-content-md-end"
        v-if="filterData.length === 0"
      >
        抱歉，目前尚無相關商品，請重新查詢!
      </p>
    </nav>

    <section class="mb-5">
      <div class="container">
        <!-- 產品列表 -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
          <div class="col" v-for="item in filterData" :key="item.id">
            <div
              class="card bg-secondary border border-secondary"
              style="
                border-radius: 1rem;
                box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
              "
            >
              <div class="d-flex justify-content-between align-items-center">
                <div class="invisible">排版用</div>
                <h2 class="text-primary fw-bold my-3">
                  {{ item.title }}
                </h2>
                <p class="ms-2 my-3 bg-primary" style="width: 7rem; height: 1px"></p>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="card-foods-img"
                  :style="[
                    item.title === '炸雞腿'
                      ? {
                          'background-position': 'bottom center',
                          'background-image': 'url(' + item.imageUrl + ')',
                        }
                      : {
                          'background-position': 'center center',
                          'background-image': 'url(' + item.imageUrl + ')',
                        },
                  ]"
                >
                  <p class="d-flex justify-content-end">
                    <span
                      class="
                        d-block
                        badge
                        rounded-pill
                        bg-primary
                        text-smaller
                        m-3
                      "
                    >
                      {{ item.category }}
                    </span>
                  </p>
                  <p class="d-flex justify-content-center">
                    <span class="d-block text-light p-3">
                      {{ item.description }}
                    </span>
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="btn-group my-3"
                  role="group"
                  aria-label="Large button group"
                >
                  <a
                    href="#"
                    role="button"
                    class="btn btn-outline-dark"
                    :disabled="loadingStatus === item.id"
                    @click.prevent="addCart(item.title, item.id)"
                  >
                    <i class="bi bi-cart-plus"></i>
                    <span class="ps-1">
                      {{ $filters.currency(item.price) }}/ 1
                      {{ item.unit }}</span
                    >
                  </a>
                  <a
                    href="#"
                    role="button"
                    class="btn btn-outline-dark"
                    @click.prevent="goProduct(item.id)"
                  >
                    <i class="bi bi-arrow-right-circle"></i>
                    <span class="ps-1">更多內容</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
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
      // 搜尋
      search: '',
      // 分類按鈕
      btnCategory: '',
      // 所有商品
      products: [],
      // 篩選商品
      filterData: [],
      // 購物車數量
      cartLen: 0,
      // loading 效果
      isLoading: false,
      // 防止再次點擊，對應產品 id
      loadingStatus: '',
    };
  },
  watch: {
    btnCategory() {
      this.filterProducts();
    },
    search() {
      if (!this.search) {
        this.filterProducts();
      } else {
        this.searchProducts();
      }
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
          this.products = res.data.products.sort((a, b) => b.price - a.price);
          this.btnCategory = this.$route.query.selectedCategory;
        }
      });
    },
    // 進入單一商品頁面
    goProduct(id) {
      this.$router.push(`/foods/${id}`);
    },
    // 加入購物車
    addCart(title, id, qty = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      // 準備資料
      const cart = {
        product_id: id,
        qty,
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
        this.cartLen = res.data.data.carts.length;
      });
    },
    // 篩選商品：類別
    filterProducts() {
      if (this.btnCategory === 'all') {
        this.filterData = this.products;
      } else {
        this.filterData = this.products.filter((item) => item.category === this.btnCategory);
      }
    },
    // 篩選商品：搜尋
    searchProducts() {
      if (this.search !== '') {
        this.filterData = this.products.filter((item) => item.title.match(this.search));
      } else {
        this.filterData = this.products;
      }
    },
  },
  created() {
    this.getProducts();
    this.filterProducts();
    this.getCart();
  },
};
</script>
