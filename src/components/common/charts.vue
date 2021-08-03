<template>
  <div style="display: flex;flex-direction: column;">
    <div style="display: flex;flex-direction: row;flex: 1">
      <div style="flex: 1">
        <ve-ring :data="chartData"></ve-ring>
      </div>
      <div style="flex: 1">
        <ve-histogram :data="chartData"></ve-histogram>
      </div>
    </div>
    <div style="display: flex;flex-direction: row;flex: 1">
      <div style="flex: 1">
        <ve-map :data="chartData"></ve-map>
      </div>
      <div style="flex: 1">
        <ve-radar :data="chartData"></ve-radar>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    this.chartSettings = {
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {'日期': '2020-10-08', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32},
          {'日期': '2020-10-10', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26},
          {'日期': '2020-10-11', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76},
          {'日期': '2020-10-12', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49},
          {'日期': '2020-10-13', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323},
          {'日期': '2020-10-14', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78}
        ]
      }
    }
  }
}
</script>
