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
      console.log(this.loginForm);
      console.log(process.env.VUE_APP_apiUrl);

      const param = JSON.stringify({
        username: this.loginForm.username,
        password: this.loginForm.password,
      });
      console.log(param);

      this.$axios.post("/collect/account/login", param).then((resp) => {
        console.log(resp)
        
        this.$router.push({
          name: 'Report'
        })
      });
    },
  },
};
</script>