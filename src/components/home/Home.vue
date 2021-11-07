<template>
  <div class="home">
    <el-container class="home-container">
      <!--    头部区域-->
      <el-header>
        <div>
          <img src="../../assets/logo.png" alt=""/>
          <h3>跑着吃，后台管理系统</h3>
        </div>
        <div>
          <el-menu
              class="el-menu-top"
              mode="horizontal"
              @select="handleSelect"
              background-color="#373d3f"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>{{ "Hello," + user.username }}</span>
              </template>
              <el-menu-item index="1-1">
                <template slot="title">
                  <i class="el-icon-s-custom"></i>
                  <span>个人中心</span>
                </template>
              </el-menu-item>
              <el-menu-item index="2-2">
                <template slot="title">
                  <i class="el-icon-s-release"></i>
                  <span>退出登录</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <template slot="title">
                <i class="el-icon-chat-dot-square"></i>
                <span>消息</span>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <!--    中部区域-->
      <el-container class="home-container-mid">
        <!--  侧边栏-->
        <el-aside :width="isCollapse ? '61px' : '180px'">
          <el-menu
              default-active="2"
              class="el-menu-vertical-aside"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
            <!--            首页-->
            <el-menu-item index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>首页统计</span>
              </template>
            </el-menu-item>
            <!--            用户管理-->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span slot="title">用户管理</span>
              </template>
              <el-menu-item index="2-1">用户列表</el-menu-item>
            </el-submenu>
            <!--            权限管理-->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-operation"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="3-1">角色列表</el-menu-item>
              <el-menu-item index="3-2">权限列表</el-menu-item>
            </el-submenu>
            <!--            商品管理-->
            <el-menu-item index="4">
              <i class="el-icon-shopping-bag-1"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-truck"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="4-1">待处理订单</el-menu-item>
              <el-menu-item index="4-2">历史订单</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isCollapse: false,//时候启用侧边栏折叠
      user: {
        username: "智商低"
      }
    }
  },
  methods: {
    //退出登录
    logout() {
    },
    //打开菜单时
    handleOpen() {
    },
    // 关闭菜单时
    handleClose() {
    },
    handleSelect() {
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100vh;
}

.el-submenu .el-menu-item {
  text-align: right;
  margin-right: 10px;
}

.el-menu-item, .el-submenu {
  margin-right: 20px;
}

.home-container-mid {
  height: 100%;
  background-color: #2c3e50;
}

.el-header {
  display: flex;
  margin: 0;
  justify-content: space-between;
  padding-left: 0;
  background-color: #373d3f;
  align-items: center;
  color: #fff;
  font-size: 20px;
}

.el-header img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.el-header span {
  margin-left: 15px;
}

.el-header > div {
  display: flex;
  align-items: center;
}

.el-menu-vertical-aside {
  height: 100%;
}

.el-menu-top {
  border: none !important;
}

</style>

