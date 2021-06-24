<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      router="true"
      @select="handleSelect">

      <el-menu-item>
        <img src="../assets/logo.png" height="32px" />
      </el-menu-item>

      <template v-for="(menu, index) in menus">
        
        <el-submenu v-if="menu.subMenus && menu.subMenus.length > 0" :key="index">
          <template slot="title">{{ menu.name }} </template>
          <el-menu-item v-for="(subMenu, index2) in menu.subMenus" :key="index2" :index="subMenu.path">
            {{ subMenu.name }}
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :key="index" :index="menu.path">
          {{ menu.name }}
        </el-menu-item>
      </template>

      <el-menu-item index="/profile" style="float: right; margin-right: 12px">
          个人中心
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>
export default {
  name: "HeaderMenu",

  data() {
    return {
      activeIndex: "dashboard",
      menus: [
        {
          path: "/dashboard",
          name: "首页"
        },
        {
          path: "/cases",
          name: "案件列表"
        },
        {
          path: "/report",
          name: "绩效报表"
        },
        {
          path: "/collectors",
          name: "催收员管理"
        },
        {
          path: "",
          name: "系统管理",
          subMenus: [
            {
              path: "/system/role",
              name: "角色管理",
            },
          ],
        },
      ],
    };
  },

  methods: {
    handleSelect() {
      console.log("Menu click");
    },
  },
};
</script>
