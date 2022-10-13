<template>
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="orderModalLabel"
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
          <div class="modal-header flex-column align-items-stretch">
            <!-- 訂單編號 -->
            <h5 class="modal-title fw-bold" id="couponModalLabel">
              {{ tempOrder.id }}
            </h5>
            <!-- 下單時間 -->
            <p class="text-secondary mb-0">
              <i class="bi bi-calendar-check-fill"></i>
              下單時間：{{ $filters.date(tempOrder.create_at) }}
            </p>
            <!-- 付款金額 -->
            <p class="text-secondary">
              <i class="bi bi-cash-coin"></i>
              付款金額：{{ $filters.currency(tempOrder.total) }}
            </p>
            <!-- 付款時間、付款狀態 -->
            <div
              class="alert d-flex justify-content-between text-primary"
              :class="tempOrder.is_paid ? 'alert-secondary' : 'alert-danger'"
            >
              <p class="mb-0">
                <i class="bi bi-credit-card-2-back mx-1"></i>
                <span v-if="tempOrder.paid_date"
                  >付款時間：{{ $filters.date(tempOrder.paid_date) }}</span
                >
                <span v-else>付款時間不正確 {{ tempOrder.paid_date }}</span>
              </p>
              <p class="switch-field mb-0">
                <input
                  class="switch"
                  type="checkbox"
                  v-model="tempOrder.is_paid"
                  :id="`paidSwitch${tempOrder.id}`"
                />
                <label :for="`paidSwitch${tempOrder.id}`"></label>
              </p>
            </div>
          </div>
          <!-- 用戶資料、選購商品 -->
          <div class="modal-body">
            <div class="d-flex">
              <button
                class="btn btn-outline-primary col me-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseUser"
                :aria-expanded="userCollapse"
                @click="userCollapse = !userCollapse">
                用戶資料
              </button>
              <button
                class="btn btn-outline-primary col ms-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseProduct"
                :aria-expanded="productCollapse"
                @click="productCollapse = !productCollapse">
                選購商品
              </button>
            </div>
            <div v-if="userCollapse" id="collapseUser">
              <table class="table mt-3">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="productCollapse" id="collapseProduct">
              <table class="table mt-3">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-light">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="$emit('update-order', tempOrder)"
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
    innerOrder: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    innerOrder() {
      this.tempOrder = this.innerOrder;
      this.isPaid = this.tempOrder.is_paid;
    },
  },
  data() {
    return {
      modal: {},
      tempOrder: {},
      status: {},
      isPaid: false,
      userCollapse: false,
      productCollapse: false,
    };
  },
  emits: ['update-order'],
  mixins: [modalMixin],
};
</script>
