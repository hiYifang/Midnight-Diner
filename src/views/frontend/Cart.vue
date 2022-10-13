<template>
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

    <div class="bg-light mt-3">
      <router-view />
    </div>

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
};
</script>
