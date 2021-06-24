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
          <template slot="title">{{ $t(menu.name) }} </template>
          <el-menu-item v-for="(subMenu, index2) in menu.subMenus" :key="index2" :index="subMenu.path">
            {{ $t(subMenu.name) }}
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :key="index" :index="menu.path">
          {{ $t(menu.name) }}
        </el-menu-item>
      </template>

      <el-menu-item index="/profile" style="float: right; margin-right: 12px">
          {{ $t('menu.profile') }}
      </el-menu-item>

      <el-menu-item @click="changeLanguage" style="float: right; margin-right: 12px">
          {{ $t('menu.changeLanguage')}}
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>
import i18n from "@locales/i18n";

export default {
  name: "HeaderMenu",

  data() {
    return {
      activeIndex: "dashboard",
      menus: [
        {
          path: "/dashboard",
          name: "menu.dashboard"
        },
        {
          path: "/cases",
          name: "menu.cases"
        },
        {
          path: "/report",
          name: "menu.report"
        },
        {
          path: "/collectors",
          name: "menu.collectors"
        },
        {
          path: "",
          name: "menu.system",
          subMenus: [
            {
              path: "/system/role",
              name: "menu.systemRole",
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
    changeLanguage() {
      i18n.locale = 'zh'
    }
  },
};
</script>
