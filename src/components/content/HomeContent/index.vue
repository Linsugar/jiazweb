<template>
  <div style="width: 100%;height: 100%">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium" >7</h3>
      </el-carousel-item>
    </el-carousel>
    <el-divider content-position="left">优秀好文</el-divider>
    <el-collapse accordion>
      <div style="display: flex;flex-direction: row;padding: 3px" v-for="item in 10">
        <div style="flex: 1">
          <el-image :src="urls" style="border-radius: 5px;margin-right: 5px"></el-image>
        </div>
        <div style="flex: 19">
          <el-collapse-item title="效率 Efficiency">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
        </div>
      </div>
    </el-collapse>

  </div>

</template>

<script>
export default {
name: "index",
  data(){
  return {

    activeIndex: '1',
    activeIndex2: '1',
    urls: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  border-radius: 5px;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  background-image: url("https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg");
}

.el-carousel__item:nth-child(2n) {
  background-color: #d3dce6;
  border-radius: 5px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  border-radius: 5px;
}
</style>
