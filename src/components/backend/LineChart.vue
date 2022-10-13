<script>
// 引入 Line component
import { Line } from 'vue3-chart-v2';

export default {
  extends: Line,
  // 加入基本的資料驗證
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    chartColorOptions: {
      type: Object,
    },
  },
  mounted() {
    const data = JSON.parse(JSON.stringify(this.chartData));
    // 處理 Invalid Date
    data.forEach((item, index) => {
      if (item.date === 'Invalid Date') {
        data.splice(index, 1);
      }
    });
    // 取出陣列不重複的值，讓同一天的數據相加
    const result = [];
    data.forEach((item) => {
      if (!this[item.date]) {
        this[item.date] = { date: item.date, total: 0 };
        result.push(this[item.date]);
      }
      this[item.date].total += item.total;
    }, Object.create(null));
    // 從傳入的資料中取出數字與日期，並將其反轉(因為我們拿到的是最新到最舊的資料)
    const dates = result.map((d) => d.date).reverse();
    const totals = result.map((d) => d.total).reverse();

    this.renderChart(
      {
        // 用於 x 軸
        labels: dates,
        // 用來設定資料、樣式
        datasets: [
          {
            // 顯示在圖表中對應的資料控制顯示
            label: this.label,
            data: totals,
            // 用於樣式設定
            ...this.chartColorOptions,
          },
        ],
      },
      // 圖表的額外設定
      this.options,
    );
  },
};
</script>
