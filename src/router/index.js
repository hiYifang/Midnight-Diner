import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    // 首頁
    path: '/',
    name: 'home',
    component: () => import('../views/frontend/Home.vue'),
  },
  {
    // 所有商品 all
    // 一人獨享 only
    // 兩人專屬 couple
    // 多人共享 team
    // 歡慶節日 festival
    // 當季限定 limit
    // 最新上架 new
    // 加購專區 addon
    path: '/foods',
    name: 'foods',
    component: () => import('../views/frontend/Foods.vue'),
  },
  {
    // 單一商品
    path: '/foods/:foodId',
    component: () => import('../views/frontend/Food.vue'),
  },
  {
    // 購物車頁面
    path: '/cart',
    name: 'cart',
    component: () => import('../views/frontend/Cart.vue'),
    children: [
      {
        // 確認訂單 + 填寫購買資料
        path: 'content',
        component: () => import('../views/frontend/CheckoutContent.vue'),
      },
      {
        // 確認付款
        path: 'pay/:orderId',
        name: 'pay',
        component: () => import('../views/frontend/CheckoutPay.vue'),
      },
      {
        // 已付款
        path: 'ispaid',
        component: () => import('../views/frontend/CheckoutIspaid.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    // 後台(Navbar、ToastMessages)
    path: '/admin',
    name: 'BackEnd',
    component: () => import('../views/backend/Admin.vue'),
    children: [
      {
        // 首頁
        path: 'index',
        component: () => import('../views/backend/Index.vue'),
      },
      {
        // 產品
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        // 優惠卷
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        // 訂單
        path: 'orders',
        component: () => import('../views/backend/Orders.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      // 跳轉至該頁面的路徑
      name: 'home',
    },
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: {
      // 跳轉至該頁面的路徑
      path: '/login',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active',
});

export default router;
