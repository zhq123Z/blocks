<template>
  <div class="wh-header">
    <header class="header">
      <div class="container">
        <h1>
          <a>
            <img class="logo" src="../../assets/logo.png" alt="WeiShiBo"></img>
          </a>
        </h1>

        <!-- <p>应用中心</p> -->
        <ul class="nav">
          <li class="nav-item noleftborder">
            <button class="btn-icon" style="width: 24px;height: 28px;top: 22px; right: 136px;"><img src="../../assets/top_nav_icon_contact.png"></img></button>
          </li>
          <li class="nav-item">
            <button class="btn-icon btn-icon-round" style="width: 46px;height: 46px;top: 13px; right: 30px;"><img src="../../assets/usercenter_icon_default.png"></img></button>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<style scoped>
.wh-header{
  height: 72px;
}

.header {
  height: 72px;
  color: #FFFFFF;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 72px;
  z-index: 100;
  background-color: #4670E8;
  position: relative;
}

.container {
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
}

.header .container {
  height: 100%;
  box-sizing: border-box;
}

.header h1 {
  margin: 0;
  float: left;
  font-size: 32px;
  font-weight: 400;
}

.header .nav {
  float: right;
  height: 100%;
  line-height: 72px;
  background-color: transparent;
  padding: 0;
  margin: 0;
}

.header .nav-item {
  margin: 0;
  float: left;
  list-style: none;
  position: relative;
  margin: 0 30px;
  border-left: 1px solid #345dcf;
}

.header .nav .noleftborder {
  border-left: 0px;
}

.btn-icon {
  padding: 0;
  background-color: rgba(0,0,0,0);
  border: 0px none;
}

.btn-icon img{
  margin: 0;
  padding: 0;
}

.btn-icon-round {
  -webkit-border-radius: 23px;
	-moz-border-radius: 23px;
	border-radius: 23px;
  border-width: 0;
}

</style>
