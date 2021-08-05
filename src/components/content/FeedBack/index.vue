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
          :data="tableData"
          style="width: 100%">
        <el-table-column
            label="反馈日期"
            prop="feedback_time">
        </el-table-column>
        <el-table-column
            label="反馈记录ID"
            prop="feed_createID">
        </el-table-column>
        <el-table-column
            label="反馈内容"
            prop="feedback_context">
        </el-table-column>
        <el-table-column
            label="反馈结果"
            prop="feedback">
        </el-table-column>
        <el-table-column
            align="right">
          <template slot="header" slot-scope="scope">
            <el-input
                @keyup.enter.native="feedfilter"
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
                disabled="true"
                @click="handleDelete(scope.$index, scope.row)">删除记录</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
import request from "@/network/request";
export default {
  name: "FeedBack",
  created() {
    console.log("feedback-create")
    this.GetallFeedBack();
  },
  data(){
    return {
      input: '',
      tableData:  [],
      search: ''
    }
  },
  methods:{
    feedfilter(){
      // 反馈过滤
      request({
        url:"feedeal/",
        params:{
          content:this.search
        },
        method:"GET"
      }).then(value => {
        this.tableData = value.data
      })
    },
    GetallFeedBack(){
    //  获取所有的反馈消息进行处理
      request(
          {
            url:"feedback/",
            methods: "GET",
          }
      ).then(value => {
        console.log(value)
        this.tableData = value.data

      })
    },

    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path:'/deal',
        query:{
          data:row
        }
      })
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }

}
</script>

<style scoped>

</style>
