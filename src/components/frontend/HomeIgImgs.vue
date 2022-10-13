<template>
  <section class="instagram de-main">
    <figure class="d-block d-md-none align-self-center">
      <img
        src="@/assets/img/instagram.jpeg"
        alt="instagram"
        class="img-fluid"
      />
    </figure>
    <div class="d-flex flex-row-reverse p-4" id="trigger-instagram">
      <ul class="list-unstyled row row-cols-3 g-2">
        <li
          class="col position-relative"
          v-for="(item, key) in igImgs"
          :key="key"
        >
          <div class="position-relative">
            <img :src="item.src" class="img-style object-fit" alt="IG" />
            <p class="text-overlay">
              <span>{{ item.content }}</span>
              <span></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import IGOneImg from '@/assets/img/foods/tofu.jpeg';
import IGTwoImg from '@/assets/img/foods/eggplant.jpeg';
import IGThreeImg from '@/assets/img/foods/dish.jpeg';
import IGFourImg from '@/assets/img/foods/hotdog.jpeg';
import IGFiveImg from '@/assets/img/foods/fish_1.jpeg';
import IGSixImg from '@/assets/img/foods/fish_2.jpeg';

export default {
  data() {
    return {
      // IG 圖示
      igImgs: [
        {
          src: IGOneImg,
          content: '春季限定',
        },
        {
          src: IGTwoImg,
          content: '春季限定',
        },
        {
          src: IGThreeImg,
          content: '夏季限定',
        },
        {
          src: IGFourImg,
          content: '秋季限定',
        },
        {
          src: IGFiveImg,
          content: '即將推出',
        },
        {
          src: IGSixImg,
          content: '即將推出',
        },
      ],
    };
  },
};
</script>
