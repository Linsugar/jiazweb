<template>
  <div style="width: 100%;height:100%;display: flex;flex-direction: column">
    <div style="flex: 1;width: 600px;height: 30px;display: flex;flex-direction: row">
      <div >
        <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable
            type="text"
            size="mini">
        </el-input>
      </div>
      <div style="margin-left: 10px">
        <el-button type="danger" size="mini">反馈</el-button>
      </div>
    </div>
    <div style="flex: 17;">
      <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
        <el-table-column
            label="反馈日期"
            prop="date">
        </el-table-column>
        <el-table-column
            label="反馈者"
            prop="name">
        </el-table-column>
        <el-table-column
            label="反馈内容"
            prop="address">
        </el-table-column>
        <el-table-column
            align="right">
          <template slot="header" slot-scope="scope">
            <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">忽略</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
export default {
name: "FeedBack",
  created() {
  console.log("feedback-create")
  },
  data(){
  return {
    input: '',
    tableData:  [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }],
    search: ''
  }
  },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }

}
</script>

<style scoped>

</style>
