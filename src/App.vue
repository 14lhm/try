<template>
  <div>
    <el-menu
      default-active="home"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      >
      <el-menu-item v-for="item in items" :key="item.path" :index="item.path">{{item.name}}</el-menu-item>
      
    </el-menu>

    <div id="aaa">
      <div>
        <div>
          <router-view class=""></router-view>
        </div>
      </div>
    </div>

    <router-link to="/about">aaa</router-link>
    <router-link to="/">bbb</router-link>

    

    
  </div>
</template>
<script>
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'

Vue.use(ElementUI);

export default {
  data(){
    return {
      items:[
        {
          name:"主页",
          path:"home"
        },
        {
          name:"列表",
          path:"list"
        },
        {
          name:"详情",
          path:"detail"
        },
        {
          name:"用户",
          path:"user"
        }
      ]
    }
  },
  methods:{
    
  }
}
</script>

<style lang="less">

</style>
