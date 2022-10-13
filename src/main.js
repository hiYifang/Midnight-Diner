import { createApp } from 'vue';
// 引入 axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// 引入 loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// 引入 icon
import 'bootstrap-icons/font/bootstrap-icons.css';
// 匯入 vee-validate 主套件
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules';
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 引入 AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// 引入 vue-sweetalert2
import VueSweetalert from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// 引入 Vue Carousel
import VueCarousel from 'vue-carousel';

import App from './App.vue';
import router from './router';
// 匯出千分號
import { currency, date } from './methods/filters';
// 匯入彈跳吐司元件
import $httpMessageState from './methods/pushMessageState';

const app = createApp(App);

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

// 正常來說不建議太多方法掛 Global，$httpMessageState 建議使用 provide 來處理
// 配置全域屬性，使用 $filters 較不易與區域元件變數發生衝突
app.config.globalProperties.$filters = { currency, date };
// $httpMessageState 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(AOS.init({ duration: 1200 }));
app.use(VueSweetalert, {
  toast: true,
  position: 'top-start',
  showConfirmButton: false,
  timer: 5000,
});
app.use(VueCarousel);
app.use(VueAxios, axios);
app.use(router);

// 全域註冊
app.component('Loading', Loading);
// 註冊 vee-validate 三個全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
