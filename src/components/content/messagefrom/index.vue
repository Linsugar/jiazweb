<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入内容" v-model="form.input1">
          <template slot="prepend">主标题</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入内容" v-model="form.input2">
          <template slot="prepend">副标题</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" disabled="true" plain>首页图</el-button>
      </el-form-item>
      <el-form-item>
        <el-upload
            action=" http://localhost:8080/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <slot :itemvalue="form"></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'fromMessage',
  data(){
  return {
    form:{ //对象里面不需要预定义内容
    },
    checked: false
  }
  },
  created() {
    console.log('我是item',this)
  },
  methods:{
    handlePictureCardPreview(result){
      console.log(result)

    }
  }
}
</script>

<style scoped>
div{
  width: 100%;
  height: 100%;
}

</style>
