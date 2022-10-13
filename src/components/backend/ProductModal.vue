<template>
  <!-- 透過 ref 存取 DOM 元素 -->
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-primary border-0">
        <div class="p-3">
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-header justify-content-around align-items-center">
            <div class="w-30 m-1">
              <img
                class="img-thumbnail"
                :src="
                  tempProduct.imageUrl
                    ? tempProduct.imageUrl
                    : imageUrl
                    ? imageUrl
                    : 'https://fakeimg.pl/300/'
                "
                :alt="tempProduct.title"
              />
            </div>
            <div class="m-1">
              <input
                type="text"
                class="form-control border-0 border-bottom rounded-0 p-0"
                id="productModalLabel"
                placeholder="請輸入商品"
                v-model="tempProduct.title"
              />
              <p class="fs-static-14 text-secondary mb-0">
                <i class="bi bi-exclamation-diamond"></i>
                欄位必填
              </p>
            </div>
            <div class="switch-field m-1">
              <input
                class="switch"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempProduct.is_enabled"
                id="is_enabled"
              />
              <label for="is_enabled"></label>
            </div>
          </div>
          <div class="modal-body">
            <!-- 分類、單位 -->
            <div class="row g-2">
              <div class="col-md mb-3">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="category"
                    v-model="tempProduct.category"
                  >
                    <option
                      :value="item"
                      v-for="(item, key) in category"
                      :key="key"
                    >
                      {{ item }}
                    </option>
                  </select>
                  <label for="category">
                    <i
                      class="
                        bi bi-exclamation-diamond
                        fs-static-14
                        text-secondary
                      "
                    ></i>
                    請選擇分類
                  </label>
                </div>
              </div>
              <div class="col-md mb-3">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="unit"
                    v-model="tempProduct.unit"
                  >
                    <option
                      :value="item"
                      v-for="(item, key) in unit"
                      :key="key"
                    >
                      {{ item }}
                    </option>
                  </select>
                  <label for="unit">
                    <i
                      class="
                        bi bi-exclamation-diamond
                        fs-static-14
                        text-secondary
                      "
                    ></i>
                    請選擇單位
                  </label>
                </div>
              </div>
            </div>
            <!-- 原價、售價 -->
            <div class="row g-2">
              <div class="col-md mb-3">
                <div class="form-floating">
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    v-model.number="tempProduct.origin_price"
                    min="0"
                  />
                  <label for="origin_price">
                    <i
                      class="
                        bi bi-exclamation-diamond
                        fs-static-14
                        text-secondary
                      "
                    ></i>
                    請輸入原價
                  </label>
                </div>
              </div>
              <div class="col-md mb-3">
                <div class="form-floating">
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    v-model.number="tempProduct.price"
                    min="0"
                  />
                  <label for="price">
                    <i
                      class="
                        bi bi-exclamation-diamond
                        fs-static-14
                        text-secondary
                      "
                    ></i>
                    請輸入售價
                  </label>
                </div>
              </div>
            </div>
            <!-- 產品描述、說明內容 -->
            <div class="d-flex">
              <button
                class="btn btn-outline-primary col me-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseDescription"
                :aria-expanded="descriptionCollapse"
                @click="descriptionCollapse = !descriptionCollapse"
              >
                產品描述
              </button>
              <button
                class="btn btn-outline-primary col ms-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseContent"
                :aria-expanded="contentCollapse"
                @click="contentCollapse = !contentCollapse"
              >
                說明內容
              </button>
            </div>
            <div v-if="descriptionCollapse" id="collapseDescription">
              <div class="form-floating mt-3">
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempProduct.description"
                ></textarea>
                <label for="description">請輸入產品描述</label>
              </div>
            </div>
            <div v-if="contentCollapse" id="collapseContent">
              <div class="form-floating mt-3">
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  v-model="tempProduct.content"
                ></textarea>
                <label for="content">請輸入說明內容</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer flex-nowrap justify-content-around bg-light">
          <input
            type="file"
            class="form-control w-75 text-primary"
            id="inputFile"
            ref="fileInput"
            @change="uploadFile"
          />
          <!-- 透過 emit 傳遞資料 -->
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="$emit('update-product', tempProduct)"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    // 取得外層 Products.vue 的單一產品
    innerProduct: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  // 監聽外層 Products.vue 的變數 tempProduct 是否有更動
  watch: {
    innerProduct() {
      this.tempProduct = this.innerProduct;
    },
  },
  data() {
    return {
      modal: {},
      // 單向數據流，儲存修改外層 Products.vue 的數據
      tempProduct: {},
      category: [
        '一人獨享',
        '兩人專屬',
        '多人共享',
        '歡慶開幕',
        '當季限定',
        '最新上架',
        '加購專區',
      ],
      unit: ['份', '杯', '壺'],
      // 預覽圖片
      imageUrl: '',
      descriptionCollapse: false,
      contentCollapse: false,
    };
  },
  methods: {
    // 上傳圖片
    uploadFile() {
      const file = this.$refs.fileInput.files[0];
      const beforeId = this.$refs.fileInput.id;

      // 預覽圖片
      const reader = new FileReader();
      reader.addEventListener('load', this.imageLoaded);
      reader.readAsDataURL(file);

      // 建立 formData 格式
      const formData = new FormData();
      // 新增 Form 表單的欄位，對照 input name
      formData.append('file-to-upload', file);

      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData).then((res) => {
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl;
          // 清空欄位
          document.getElementById(beforeId).value = '';
          this.imageUrl = '';
        }
      });
    },
    // 預覽圖片
    imageLoaded(e) {
      this.imageUrl = e.target.result;
    },
  },
  mixins: [modalMixin],
};
</script>
