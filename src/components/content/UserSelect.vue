<template>
<div style="width: 100%;height: 100%;display: flex;flex-direction: column" v-loading="loading">
  <div class="flex1">
    <el-input style="width: 15%;"
        placeholder="请输入内容"
        v-model="input10"
        clearable
              size="mini">
    </el-input>
    <el-button type="primary" v-for="(li,j) in btnlist" @click="j===2?open3():''" size="mini">{{li}}</el-button>
  </div>
  <div class="flex2">
    <div style="width: 100%;height: 100%">

        <el-table
            size="mini"
            :data="tableData2"
            style="width: 100%"
            height="700"
            :row-class-name="tableRowClassName">
          <el-table-column
              prop="uid"
              label="编号"
              width="280">
          </el-table-column>
          <el-table-column
              prop="date"
              label="日期"
              width="280">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="280">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址"
              width="450">
          </el-table-column>

          <el-table-column width="390" label="操作">
            <template slot-scope="scope">
            <el-button type="primary" @click="delebtn(scope.row.uid)" size="mini">删除</el-button>
            <el-button type="primary" @click="ChangeFrom(scope.row.uid)" size="mini">修改</el-button>
            </template>
          </el-table-column>

        </el-table>

     <div style="text-align: right" v-if="tableData2.length>8?true:false">
       <el-pagination
           background
           layout="prev, pager, next"
           :total="1000">
       </el-pagination>
     </div>
    </div>
  </div>
<!--  弹窗-->
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" destroy-on-close=true>
      <el-form :model="form" >
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
              v-model="form.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sumbitFrom(form)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</div>
</template>

<script>
export default {
  name: "UserSelect",
  data(){
  return {
    input10:'',
    btnlist:[
        '搜索',
        '重置',
        '新增订单'
    ],
    tablistbtn:[
      '删除',
      '修改'
    ],
    tableData2: [{
      uid: 1,
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      uid: 2,
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      uid: 3,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      uid: 4,
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }]
  ,
    dialogFormVisible: false,
    formLabelWidth: '120px',
    value1:'',
    form: {
      uid: '',
      date: '',
      name: '',
      address: '',
      region: '',
    },
    loading: true
  }
  },
  methods: {
    open3(){
      //打开dilog
      this.dialogFormVisible = true
    },
    delebtn(prop){
      //删除对应的订单
      console.log("删除",prop)
      this.tableData2.splice(prop-1,1)
      console.log(this.tableData2.indexOf(8))
    },
    sumbitFrom(data){
      //新增订单
      console.log(data)
      let a = new Date(data.date)
      console.log(this.form.date)
      this.tableData2.push({uid:this.tableData2.length+1,date: data.date,name:data.name,address:data.address})
      this.dialogFormVisible = false
      console.log(this.tableData2.length,'数量')
    },
    /*修改订单*/
    ChangeFrom(prop){
      console.log(prop)
      let FormData = this.tableData2[prop-1]
      this.dialogFormVisible = true
      this.form.name = FormData.name
      this.form.address = FormData.address
      this.form.date = FormData.date
    }
  },
  mounted() {
    this.loading =false
  }
}
</script>

<style scoped>

.flex1 {
  display: flex;
  align-items: center;
  flex: 1;
}
.el-button--primary {
  width: auto;
  height: 30px;
  text-align: center;
  padding: 10px;
  margin: 2px;
  line-height: 10px;
}

.flex2 {
  flex: 9;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
::v-deep .cell {
  display: flex;
  flex-direction: row;
}
</style>
