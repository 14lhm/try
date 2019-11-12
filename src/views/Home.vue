<template>
  <div>
    111111111111111111111111111111111
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,idx) in data" :key="idx">
        <img :src="item.src" alt="" width="100%">
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
import data from "../json/logo.json"

export default {
  name: 'home',
  data(){
    return {
      data
    }
  },
  components: {
  
  },
  created(){
   
  },
  methods: {
   
  },
  beforeRouteLeave (to, from, next) {
    console.log("home leave")
    next()
  }
}
</script>
<style lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  .el-carousel__item{
    height: auto !important;
  }
  .el-carousel__item img{
    display: block
  }
  .el-carousel__container::after,.el-carousel__item::after{
    content:'.';
    height: 0;
    display: block;
    clear: both;
    visibility: hidden;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
