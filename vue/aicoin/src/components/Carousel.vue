<template>
  <div class="carousel">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" width="100vw">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.el-carousel__item:nth-child(1) {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100vh;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>