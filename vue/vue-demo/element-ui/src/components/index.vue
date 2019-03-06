<template>
  <div>
    <el-carousel :interval="4000" type="card" height="600px">
      <el-carousel-item>
        <img src="./../assets/logo.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="./../assets/logo.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="./../assets/logo.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="./../assets/logo.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="./../assets/logo.png">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
