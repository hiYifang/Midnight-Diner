<template>
  <section class="de-main">
    <figure class="d-flex d-md-none align-self-center">
      <img src="@/assets/img/menu_three.jpeg" alt="menu" class="img-fluid" />
    </figure>
    <!-- 特色主題 -->
    <div class="p-3" id="trigger-one">
      <h2 class="h3 d-flex align-items-center">
        <img
          src="@/assets/img/icons/chopsticks.png"
          alt="chopstick"
          class="img-fluid w-icon"
        />
        特色主題
      </h2>
      <div class="row row-cols-1 row-cols-md-2 gx-4">
        <div class="col" v-for="(item, key) in unique" :key="key">
          <figure class="figure unique">
            <img :src="item.src" class="img-fluid" :alt="item.alt" />
            <figcaption>
              <h2>{{ item.alt }}</h2>
            </figcaption>
            <router-link
              :to="{
                path: '/foods',
                query: { selectedCategory: item.category },
              }"
              class="text-decoration-none"
            >
            </router-link>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import only from '@/assets/img/only.jpeg';
import couple from '@/assets/img/couple.jpeg';
import team from '@/assets/img/team.jpeg';
import festival from '@/assets/img/festival.jpeg';

export default {
  data() {
    return {
      // 特色主題
      unique: [
        {
          src: only,
          alt: '一人獨享',
          category: '一人獨享',
        },
        {
          src: couple,
          alt: '兩人專屬',
          category: '兩人專屬',
        },
        {
          src: team,
          alt: '多人共享',
          category: '多人共享',
        },
        {
          src: festival,
          alt: '歡慶開幕',
          category: '歡慶開幕',
        },
      ],
    };
  },
};
</script>
