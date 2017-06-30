<template>
  <section class="container" > <!--最外层容器-->
    <section class="menu"> <!--左边的容器-->
      <WhProjectsSidebar></WhProjectsSidebar>
    </section>
    <section class="content-container"><!--右边的容器-->
      <WhProjectsToolbar></WhProjectsToolbar>
      <section class="content-main">
        <WhProjectsBlank v-if="projects.length==0"></WhProjectsBlank>
        <WhProjectsBlocks v-if="displayBlocks && projects.length>0"></WhProjectsBlocks>
        <WhProjectsList v-if="!displayBlocks && projects.length>0"></WhProjectsList>
      </section>
    </section>
  </section>
</template>

<script>
import WhProjectsSidebar from './Sidebar'
import WhProjectsBlank from './Blank'
import WhProjectsList from './List'
import WhProjectsBlocks from './Blocks'
import WhProjectsToolbar from './Toolbar'
import '@/mock/mock'

export default {
  data: function () {
    return {
      displayBlocks: true,
      projects: []
    }
  },
  components: {WhProjectsSidebar, WhProjectsBlank, WhProjectsList, WhProjectsBlocks, WhProjectsToolbar},
  created () {
    this.$http.get('/api/getProjects').then(res => {
      this.projects = res.data
    })
  }
}

</script>

<style>
#wh-projects .wh-projects-main{
}
</style>
