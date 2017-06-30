<template>
  <div id="wh-projects-sidebar">
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="所有应用">
        <el-menu-item :index="workspace.ID" v-for="workspace in workspaces" :key="workspace"><i class="el-icon-message"></i>{{ workspace.name }}</el-menu-item>
      </el-menu-item-group>
    </el-menu>
    <div class="btn-add-group">
      <button class="btn-common"><span><img class="wh-add" src="../../assets/leftsidebar_btn_icon_addproject.png"></img>创建项目组</span></button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      workspaces: []
    }
  },
  created () {
    this.$http.get('/api/getWorkspaces').then(res => {
      this.workspaces = res.data
    })
  }
}
</script>

<style>
#wh-projects-sidebar{
  position: absolute;
  top: 72px;
  bottom: 0px;
  left: 0px;
  width: 230px;
  height: 100%;
  background-color: #2f364a;
}

#wh-projects-sidebar span{
  position: relative;
  width: 100%;
  display: block;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #FFFFFF;
  text-align: left;
  line-height: 20px;
}

#wh-projects-sidebar span img{
  width: 26px;
  height: 26px;
  padding-right: 10px;
}

#wh-projects-sidebar .btn-add-group{
  position: absolute;
  bottom: 80px;
  left: 0px;
  right: 0px;
}

.btn-common{
  height: 48px;
  -webkit-border-radius: 24px;
	-moz-border-radius: 24px;
	border-radius: 24px;
  border-width: 0;
  background-color: #576280;
  padding: 0;
  margin: 0 auto;
}

.btn-common span{
  display: block;
  width: 100%;
  margin: 0px 20px;
  padding: 0px;
}

.btn-common span b{
  font-family: PingFangSC-Regular;
  font-size: 18px;
  line-height: 18px;
  color: #FFFFFF;
  padding-left: 10px;
}

#wh-projects-sidebar .wh-add {
  width: 16px;
  height: 16px;
}

</style>
