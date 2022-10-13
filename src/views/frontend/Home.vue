<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid bg-light text-primary p-0">
    <HomeNavbarMb :innerCartLen="cartLen"></HomeNavbarMb>
    <HomeNavbar :innerCartLen="cartLen"></HomeNavbar>
    <main class="nav-home d-flex">
      <!-- 右側 -->
      <div class="we-main">
        <!-- 介紹 intro -->
        <section class="de-main-logo">
          <figure class="d-block d-md-none m-0">
            <img src="@/assets/img/intro.jpeg" alt="intro" class="img-fluid" />
          </figure>
          <h1 class="m-0">
            <img src="@/assets/img/logo.png" alt="logo" class="img-fluid" />
          </h1>
        </section>

        <!-- 關於 about -->
        <section class="de-main">
          <figure class="d-block d-md-none">
            <img src="@/assets/img/about.jpeg" alt="about" class="img-fluid" />
          </figure>
          <div class="text-center position-relative" id="trigger-about">
            <p class="fs-4">一天結束</p>
            <p class="fs-4">人們匆忙踏上歸途之際</p>
            <p class="fs-4">這家餐館的營業剛開始</p>
            <p class="fs-4">從午夜十一點到清晨七點</p>
            <p class="fs-4">
              名為
              <span class="fs-3 fw-bold anime-text text-secondary" ref="animetext"
                >深夜食堂</span
              >
            </p>
          </div>
        </section>

        <!-- 關於 menu -->
        <HomeMenuOne></HomeMenuOne>
        <section class="de-main p-3" id="trigger-two">
          <h2 class="h3 d-flex align-items-center">
            <img
              src="@/assets/img/icons/chopsticks.png"
              alt="chopstick"
              class="img-fluid w-icon"
            />
            當季推薦
          </h2>
          <!-- 當季推薦 -->
          <div class="row row-cols-1 row-cols-md-2 gx-4">
            <div
              class="col my-3"
              v-for="(item, key) in productsLimit"
              :key="key"
            >
              <div
                class="card-limit bg-opacity bg-cover h-100"
                :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
              >
                <h3>{{ item.title }}</h3>
                <p class="text-smaller">{{ item.description }}</p>
                <a
                  href="#"
                  role="button"
                  class="go-corner-top"
                  @click.prevent="getProduct(item.id)"
                >
                  <i class="bi bi-arrow-right-short go-arrow"></i>
                </a>
                <a
                  href="#"
                  role="button"
                  class="go-corner-bottom"
                  :disabled="loadingStatus === item.id"
                  @click.prevent="addCart(item.title, item.id)"
                >
                  <i class="bi bi-cart-plus go-add"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="de-main p-3" id="trigger-three">
          <h2 class="h3 d-flex align-items-center">
            <img
              src="@/assets/img/icons/chopsticks.png"
              alt="chopstick"
              class="img-fluid w-icon"
            />
            最新上架
          </h2>
          <!-- 最新上架 -->
          <div class="row row-cols-1 row-cols-md-2 gx-4">
            <div class="col" v-for="(item, key) in productsNew" :key="key">
              <figure class="figure card-new">
                <img :src="item.imageUrl" class="img-fluid" :alt="item.title" />
                <figcaption>
                  <h3 class="text-writing">{{ item.title }}</h3>
                  <p class="text-smaller">{{ item.description }}</p>
                  <a
                    href="#"
                    role="button"
                    class="go-corner-top"
                    @click.prevent="getProduct(item.id)"
                  >
                    <i class="bi bi-arrow-right-short go-arrow"></i>
                  </a>
                  <a
                    href="#"
                    role="button"
                    class="go-corner-bottom"
                    :disabled="loadingStatus === item.id"
                    @click.prevent="addCart(item.title, item.id)"
                  >
                    <i class="bi bi-cart-plus go-add"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <!-- 關於 discount -->
        <HomeDiscount></HomeDiscount>

        <!-- 關於 footer -->
        <HomeFooter></HomeFooter>
      </div>
      <!-- 左側 -->
      <HomeLeftImgs></HomeLeftImgs>
    </main>
  </div>
</template>

<script>
// MOVING LETTERS anime.js
import anime from 'animejs/lib/anime.es';

import HomeNavbarMb from '@/components/frontend/HomeNavbarMb.vue';
import HomeNavbar from '@/components/frontend/HomeNavbar.vue';
import HomeMenuOne from '@/components/frontend/HomeMenuOne.vue';
import HomeDiscount from '@/components/frontend/HomeDiscount.vue';
import HomeFooter from '@/components/frontend/HomeFooter.vue';
import HomeLeftImgs from '@/components/frontend/HomeLeftImgs.vue';

export default {
  components: {
    HomeNavbarMb,
    HomeNavbar,
    HomeMenuOne,
    HomeDiscount,
    HomeFooter,
    HomeLeftImgs,
  },
  data() {
    return {
      // 商品列表 - 當季限定
      productsLimit: [],
      // 商品列表 - 最新上架
      productsNew: [],
      // 購物車
      cartLen: 0,
      // loading 效果
      isLoading: false,
      // 防止再次點擊，對應產品 id
      loadingStatus: '',
    };
  },
  methods: {
    // 取得商品列表
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          res.data.products.forEach((item) => {
            if (item.category === '當季限定') {
              this.productsLimit.push(item);
            } else if (item.category === '最新上架') {
              this.productsNew.push(item);
            }
          });
        }
      });
    },
    // 進入單一商品頁面
    getProduct(id) {
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
    // 文字動畫
    animeText() {
      const animeT = this.$refs.animetext;
      animeT.innerHTML = animeT.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>",
      );

      anime
        .timeline({
          loop: false,
        })
        .add({
          targets: '.anime-text .letter',
          opacity: [0, 1],
          easing: 'easeInOutQuad', // easeOutExpo
          duration: 2250,
          delay: (el, i) => 150 * (i + 1),
        });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
  mounted() {
    this.animeText();
  },
};
</script>
