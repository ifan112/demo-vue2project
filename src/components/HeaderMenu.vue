<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      router="true"
      @select="handleSelect">

      <el-menu-item>
        <img src="../assets/logo.png" height="32px"/>
      </el-menu-item>

      <el-menu-item index="/dashboard">首页</el-menu-item>

      <el-menu-item index="/cases">案件列表</el-menu-item>

      <el-menu-item index="/report">绩效报表</el-menu-item>

      <el-menu-item index="/collectors">催收员管理</el-menu-item>

      <el-submenu>
        <template slot="title">系统管理</template>
        <el-menu-item index="/system/role">角色管理</el-menu-item>
      </el-submenu>

      <el-menu-item index="/profile" style="float: right; margin-right: 12px">
          个人中心
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>
export default {
    name: 'HeaderMenu',

    data() {
        return {
            activeIndex: "dashboard"
        }
    },

    methods: {
        handleSelect() {
            console.log("Menu click")
        }
    }
}
</script>

<style>



</style>
