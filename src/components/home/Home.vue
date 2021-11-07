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
            <el-submenu :index="1+'t'">
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
            <el-menu-item index="2'">
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
        <el-aside>

          <el-menu
              :collapse-transition="true"
              :collapse="isCollapse"
              default-active="1_id"
              class="el-menu-vertical-aside"
              @open="handleOpen"
              @close="handleClose"
              background-color="#373d3f"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-menu-item index="1">
              <template slot="title">
                <i style="color: #5dbe8a" class="el-icon-s-fold" @click="collapse()"></i>
                <span style="color: #5dbe8a" @click="collapse()">{{ isCollapse ? "展开" : "折叠" }}</span>
              </template>
            </el-menu-item>
            <!--            一级标题-->
            <el-menu-item index="2" @click="handleOpen(mainPage.path)">
              <template slot="title">
                <i :class="iconsObj[0]"></i>
                <span>{{ mainPage.title }}</span>
              </template>
            </el-menu-item>
            <el-submenu :index="item.id+'_id'" v-for="item in menuList" :key="item.id" @click="handleOpen(item.path)">
              <template slot="title">
                <i :class="iconsObj[item.id]"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item :index="i.id+'_id'" v-for="i in item.children" :key="i.id" @click="handleOpen(i.path)">
                {{ i.title }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view>

          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import logger from "si-log";

export default {
  name: 'Home',
  data() {
    return {
      isCollapse: false,//时候启用侧边栏折叠
      user: {
        username: "智商低"
      },
      mainPage: {title: '首页统计', id: 0, path: '/home/mainPage'},
      menuList: [
        //一级标题                  二级标题
        {title: '用户管理', id: 1, path: '/none', children: [{title: '用户列表', id: 6, path: '/home/userList'}]},
        {
          title: '权限管理',
          id: 2,
          path: '/none',
          children: [{title: '角色列表', id: 7, path: '/home/roleList'}, {
            title: '权限列表',
            id: 10,
            path: '/home/permissionList'
          }]
        },
        {title: '商品管理', id: 3, path: '/none', children: [{title: '商品列表', id: 8, path: '/home/goodsList'}]},
        {
          title: '订单管理',
          id: 4,
          path: '/none',
          children: [{title: '最新订单', id: 9, path: '/home/newOrderList'}, {
            title: '历史订单',
            id: 11,
            path: '/home/historyOrderList'
          }]
        },
      ],
      iconsObj: ['el-icon-s-data', 'el-icon-user', 'el-icon-s-operation', 'el-icon-shopping-bag-1', 'el-icon-truck']
    }
  },
  methods: {
    //退出登录

    //打开菜单时
    handleOpen(path) {
      this.isCollapse = false;
      logger.info('handleOpen:path=' + path)
      // 跳转到指定页面
      if (path.match('/') && this.$route.path != path)
        this.$router.push(path)
    },
    // 关闭菜单时
    handleClose() {
    },
    handleSelect(key) {
      logger.info('handleOpen:path=' + key)

    },
    collapse() {
      logger.info('collapse Called')
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100vh;
}

.el-menu {
  text-align: left;
  user-select: none;
  border: none !important;
  overflow: hidden;
}

.el-submenu .el-menu-item {
  padding: 0 !important;
  text-align: center;

}

.el-menu-item, .el-submenu {
}

.home-container-mid {
  height: 100%;
  /*background-color: #2c3e50;*/
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

.el-main {
  padding: 0;
}
</style>

