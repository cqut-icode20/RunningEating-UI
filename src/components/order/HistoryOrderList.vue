<template>
  <div class="order">
    <Breadcrumb name1="订单管理" name2="订单列表" />
    <el-card>
      <!--搜索-->
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容" clearable v-model="queryInfo.query" @clear="getOderList">

          </el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "HistoryOrderList"
}
</script>

<style scoped>

</style>
