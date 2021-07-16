<template>
  <div class="p-10 h-full w-full">
    <div class="flex">
      <a
        @click.prevent="logout"
        class="ml-auto cursor-pointer bg-green-400 px-2"
        v-if="isLoggedIn"
      >
        Logout</a
      >
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("initLogin");
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    isLoggedIn() {
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
