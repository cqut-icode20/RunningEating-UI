<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" id="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ name1 }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ name2 }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    name1: String,
    name2: String
  }
}
</script>

<style>
  #bread {
      margin: 10px 0 10px 10px;
  }
</style>
