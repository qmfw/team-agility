<template>
  <main>
    <article id="login_area" class="main_article">
      <h1>Login Page</h1>
      <v-btn @click="tryLogin">PUSH</v-btn>
    </article>
  </main>
</template>

<script>
export default {
  name: "Login",

  emits: ["show-now-loading"],

  data: () => {
    return {};
  },
  mounted() {},
  methods: {
    tryLogin() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
