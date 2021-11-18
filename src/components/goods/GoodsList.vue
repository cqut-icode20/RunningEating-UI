<template>
  <div>
    <Breadcrumb name1 = "商品管理" name2 = "商品列表" />
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :guuter = "20">
        <el-col :span = "7">
          <!-- 搜索与添加区域 -->
          <el-input aria-placeholder="请输入内容">
            <el-button slot = "append" icon = "el-icon-search"></el-button>
          </el-input>
        </el-col>

        <el-col :span = "4">
          <!-- 添加用户区域 -->
          <el-button type="primary" @click="addDialogVisible = true">商品添加</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>

<script>
import Breadcrumb from "@/components/content/breadcrumb/Breadcrumb";
export default {
  name: "GoodsList",
  data(){
    return {

    }
  },
  components:{
    Breadcrumb
  }
}
</script>

<style scoped>

</style>
