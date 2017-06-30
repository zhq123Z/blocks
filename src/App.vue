<template>
  <div id="app">
    <WhHeader></WhHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import WhHeader from '@/components/common/Header'

export default {
  name: 'app',
  components: {WhHeader}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, PingFang SC;
  overflow: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.el-tooltip__popper{
  padding:6px;
  background-color: #2b2e38;
  opacity: 80%;
  border-radius: 4px;
}
.el-dropdown{
  width:24px;
  height: 24px;
}
</style>
