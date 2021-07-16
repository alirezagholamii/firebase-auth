<template>
  <div class="p-10 h-full w-full">
    <p>user is logged in? {{ msg }}</p>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('initLogin')
  },
  computed: {
    msg() {
      return this.$store.state.userLoggedIn;
    },
  },
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  @apply h-full bg-green-100 font-sans;
}
</style>
