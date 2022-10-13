<template>
  <section class="de-main">
    <figure class="d-flex d-md-none align-self-center">
      <img src="@/assets/img/discount.jpeg" alt="discount" class="img-fluid" />
    </figure>
    <!-- 獨家優惠 -->
    <div class="m-3 p-3" id="trigger-discount">
      <h2 class="h3 d-flex align-items-center">
        <img
          src="@/assets/img/icons/sale.png"
          alt="sale"
          class="img-fluid w-icon"
        />
        獨家優惠
      </h2>
      <div class="row g-0">
        <div class="col-12 mb-3" v-for="item in infos" :key="item.title">
          <div class="discount">
            <div class="card-discount">
              <i
                class="bi bi-info-circle-fill avatar display-4 text-secondary"
              ></i>
              <div>
                <h4 class="h5 fw-bold mb-0">{{ item.title }}</h4>
                <p class="text-smaller mb-0">{{ item.content }}</p>
              </div>
              <router-link
                :to="{
                  path: '/foods',
                  query: { selectedCategory: 'all' },
                }"
                class="btn btn-sencondary btn-actions"
                href="#"
                role="button"
              >
                心動了嗎？GO!
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3" v-for="item in warns" :key="item.title">
          <div class="discount info">
            <div class="card-discount">
              <h4 class="h5 fw-bold mb-0">
                <i class="bi bi-lightning-fill text-primary"></i>
                <span class="text-info-title">{{ item.title }}</span>
              </h4>
              <p class="text-smaller mb-0">
                {{ item.textFirst }}
                <br class="d-block" />
                {{ item.textSecond }}
                <br class="d-block" />
                {{ item.textThird }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        {
          title: '會員卡友',
          content: '優惠碼 BEST',
        },
        {
          title: '刷卡支付',
          content: '優惠碼 CARD',
        },
        {
          title: '歡慶開幕',
          content: '全館原價 9 折',
        },
      ],
      warns: [
        {
          title: '防疫政策',
          textFirst: '配合遵守防疫政策，',
          textSecond: '本店採用餐券服務，',
          textThird: '享有線上預付優惠。',
        },
        {
          title: '防範詐騙',
          textFirst: '本店不會電話通知，',
          textSecond: '若有接到可疑電話，',
          textThird: '請撥打反詐騙專線。',
        },
      ],
    };
  },
};
</script>
