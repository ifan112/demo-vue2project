<template>
  <div>
    <el-form :mode="loginForm">
      <el-form-item :label="$t('page.login.label-username')">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>

      <el-form-item :label="$t('page.login.label-password')">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="submit" @click="submitLogin">
          {{ $t("page.login.btn-sumbit") }}
        </el-button>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="changeLocaleLanguage">切换语言</el-button>
  </div>
</template>

<script>
import i18n from "@locales/i18n";
import routesRequirePermission from '../router/permissions.js'

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    changeLocaleLanguage() {
      const localeLanguage = localStorage.getItem('localeLanguage')
      console.log(localeLanguage)

      if (localeLanguage === 'zh') {
        localStorage.setItem('localeLanguage', 'en')
        i18n.locale = 'en'
      }
      if (localeLanguage === null || localeLanguage === 'en') {
        localStorage.setItem('localeLanguage', 'zh')
        i18n.locale = 'zh'
      }
    },

    submitLogin() {
      const param = JSON.stringify({
        username: this.loginForm.username,
        password: this.loginForm.password,
      });

      this.$axios.post("/collect/account/login", param)
        .then((resp) => {
          const token = resp.data.token
          this.$axios.get("/query_user_info", {
            headers: {
              "Authorization": "A " + token
            }
          })
          .then((queryUserInfoResp) => {
              const permissionSet = new Set(queryUserInfoResp.data.perm_list)
              const realPermissionList = new Array()

              const allPermissions = routesRequirePermission[0].children
              allPermissions.forEach(r => {
                if (permissionSet.has(r.name)) {
                    realPermissionList.push(r)
                }
              })

              routesRequirePermission[0].children = realPermissionList

              localStorage.setItem('routesRequirePermission', JSON.stringify(routesRequirePermission))

              this.$router.addRoutes(routesRequirePermission)
              this.$router.push({
                path: "/dashboard"
              })
          })
        });
    },
  },
};
</script>