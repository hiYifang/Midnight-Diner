<template>
  <!-- 桌面版 -->
  <div class="s-main bg-dark">
    <figure class="ds-figure" v-for="(item, key) in leftImgs" :key="key">
      <img
        :src="item.src"
        :alt="item.alt"
        class="img-fluid"
        data-aos="fade-up"
        :data-aos-anchor="item.anchor"
        data-aos-anchor-placement="top-bottom"
      />
    </figure>
  </div>
</template>

<script>
import introImg from '@/assets/img/intro.jpeg';
import aboutImg from '@/assets/img/about.jpeg';
import menuOneImg from '@/assets/img/menu_one.jpeg';
import menuTwoImg from '@/assets/img/menu_two.jpeg';
import menuThreeImg from '@/assets/img/menu_three.jpeg';
import discountImg from '@/assets/img/discount.jpeg';
import informationImg from '@/assets/img/information.jpeg';

export default {
  data() {
    return {
      // 左側圖示
      leftImgs: [
        {
          src: introImg,
          alt: 'intro',
          anchor: '',
        },
        {
          src: aboutImg,
          alt: 'about',
          anchor: '#trigger-about',
        },
        {
          src: menuOneImg,
          alt: 'menu_one',
          anchor: '#trigger-one',
        },
        {
          src: menuTwoImg,
          alt: 'menu_two',
          anchor: '#trigger-two',
        },
        {
          src: menuThreeImg,
          alt: 'menu_three',
          anchor: '#trigger-three',
        },
        {
          src: discountImg,
          alt: 'discount',
          anchor: '#trigger-discount',
        },
        {
          src: informationImg,
          alt: 'information',
          anchor: '#trigger-information',
        },
      ],
    };
  },
};
</script>
