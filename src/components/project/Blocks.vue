<template>
  <div id="wh-projects-blocks">
    <!-- <h1>项目橱窗显示</h1> -->
    <div id="APPthumbnails">
      <template v-for="p,index in projects">
        <div class="TBS one" v-if="index==0">
          <div class="dashed">
            <div class="add">
              <img src="../../assets/grid_icon_addnewapplication.png" width="42" height="42">
            </div>
            <span v-text="projects[1].name"></span>
          </div>
        </div>

        <div class="pre" v-if="index>0" @mouseenter="curIndex=index">
          <div class="img" >
            <img src="../../assets/sample/xinjiapoyouzheng.png" width="200" height="200">
          </div>
          <ul v-show="curIndex!=index">
            <li>{{p.name}}</li>
            <li>发布日期</li>
            <li>
              <span>{{p.releasedDate}}</span>
              <span>{{p.version}}</span>
            </li>
          </ul>
          <!-- 遮罩 -->
          <div class="hover" v-show="curIndex==index">
            <div class="top">
              <i class="el-icon-delete2"></i>
              <div class="button_top">
                <i class="el-icon-edit"></i>
                <span>编辑</span>
              </div>
              <div class="button_btm">
                <i class="list_btn_icon_send-"></i>
                <i class="el-icon-edit"></i>
                <span>发布</span>
              </div>
            </div>
            <div class="btm">
              <el-dropdown >
                <span><i class="el-icon-setting"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="p in projects" :key="p">{{p.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown >
                <span class="seting_span"><i class="el-icon-setting"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="p in projects" :key="p">{{p.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown >
                <span><i class="el-icon-setting"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="p in projects" :key="p">{{p.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>

import '@/mock/mock'

export default {
  data: function () {
    return {
      projects: [],
      curIndex: 0
    }
  },
  methods: {
  },
  created () {
    this.$http.get('/api/getProjects').then(res => {
      res.data.unshift({})
      this.projects = res.data
    })
  }
}
</script>

<style scoped lang="less">
@import '../../assets/css/common.css';
.H(@height) {
  height: @height;
}
.W(@width) {
  width: @width;
}
.fz(@fz) {
  font-size: @fz;
}
.el-icon-setting{
  padding: 2px !important;
}

.seting_span{
  width: 32px;
  height: 28px;
}
.warp{
  height: 300px;
}
.el-dropdown-menu{
  border-radius: 4px;
  &:hover{
    box-shadow: 0 0 8px rgba(0,0,0,0.28);;
  }
}
// .a{
//   width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:6px solid red;
// }
#wh-projects-blocks {
  padding-left: 280px;
  text-align: left;
  .H(830px);
  background: #f2f4fa;
  #APPthumbnails {
    width: 100%;
    .H(610px);
    .TBS, .pre {
      .W(200px);
      .H(290px);
      background: #ffffff;
      margin-right: 30px;
      float: left;
      border-radius: 4px;
      .img {
        border-radius: 4px;
        overflow: hidden;
      }
    }
    .TBS.one {
      display: flex;
      align-items: center;
      justify-content: center;
      .dashed {
        width: 178px;
        .H(265px);
        border: 1px dashed #4670e8;
        text-align: center;
        .add {
          display: inline-block;
          .W(70px);
          .H(70px);
          border-radius: 50%;
          border: 1px solid #4670e8;
          margin:0 auto;
          margin-top: 68px;
          // margin-left: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span {
          text-align: center;
          margin-top: 30px;
          .fz(16px);
          color: #527fff;
          font-family: PingFangSC-Regular;
          margin-bottom: 80px;
          display: block;
        }
      }
    }
    .TBS, .pre {
      &:hover {
        box-shadow: 0 0 18px #87a0e6;
      }
      position:relative;
      margin-top: 30px;
      ul li {
        margin-left: 12px;
      }
      ul li:first-child {
        margin-top: 18px;
        margin-bottom: 16px;
        .fz(16px);
        color: #222222;
        font-family: PingFangSC-Light;
      }
      ul li:nth-child(2) {
        font-family: PingFangSC-Light, AdobeHeitStd-Regular, Helvetica-Light;
        color: #919191;
        .fz(12px);
        line-height: 18px;
      }
      ul li:last-child {
        font-family: PingFangSC-Light, AdobeHeitStd-Regular, Helvetica-Light;
        color: #919191;
        .fz(12px);
        span:last-child {
          float: right;
          margin-right: 16px;
        }
      }
    }
    .TBS.four {
      border-radius: 4px;
      position: relative;
      span.warn {
        // z-index: 2999;
        position: absolute;
        left: 184px;
        top: -8px;
        .el-icon-warning {
          .fz(26px);
          display: block;
          color: red;
        }
      }
      .img {
        .H(200px);
        background: #e2e5ed;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        border-radius: 4px;
        .fz(16px);
        color: #222222;
        text-align: center;
        font-family: PingFangSC-Regular;
        line-height: 90px;
        .H(90px);
        background: #ffffff;
      }
      i.el-icon-warning {
        background: #fff;
        border-radius: 50%;
      }
    }
  }
  .hover {
    border-radius: 4px;
    overflow: hidden;
    .H(290px);
    .W(200px);
    z-index: 1;
    // height: auto; // .H(290px);
    position: absolute;
    top: 0;
    left: 0;
    .top {
      .W(200px);
      .H(200px);
      background: #000;
      opacity: 0.7;
      .el-icon-delete2 {
        color: #99ffff;
        margin-top: 10px;
        margin-left: 10px;
      }
      .button_top, .button_btm {
        margin: auto;
        margin-top: 30px;
        text-align: center;
        line-height: 36px;
        color: #99ffff;
        .fz(16px);
        border-radius: 18px;
        border: 1px solid #99ffff;
        .W(102px);
        .H(36px);
        span {
          font-family: PingFangSC-Light;
        }
      }
      .button_btm {

        margin-top: 20px;
        .button_btm span {
          text-align: center;
          vertical-align: center;
          display: inline-block;
        }
        .button_btm span:nth-child(2) {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
      .button_top:hover, .button_btm:hover {
        color: #ffffff;
        border: 1px solid #ffffff;
      }
      .el-icon-delete2:hover {
        color: #ffffff;
      }
    }
    .btm {
      .H(90px);
      margin-top: 30px;
      margin-left: 42px;
      margin-left: 60px;
      margin-right: 42px;
      span {
        .W(32px);
        .H(28px);
        border: 1px solid #b0b0b0;
        border-radius: 4px;
        i {
          padding: 3px;
        }
      }
      span:nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
      }
      span:hover {
        color: #ffffff;
        background: #4670e8;
      }
    }
  }
}
</style>
