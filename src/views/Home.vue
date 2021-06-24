<template>
  <div class="home">
    <el-container>
      <el-header>
        <HeaderMenu />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
    HeaderMenu
  },
};
</script>

<style>

.el-header {
  padding: 0px;
}

</style>
