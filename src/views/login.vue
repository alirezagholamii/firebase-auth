<template>
  <div
    class="
      bg-green-100
      h-full
      container
      mx-auto
      md:mx-auto
      flex flex-col
      items-center
      justify-center
    "
  >
    <h3 class="mb-4 text-xl font-bold">Sign in to Toxic Positivity</h3>
    <div v-if="joined">
      <p class="font-mono ...">Be happy! you are hugged in 🤗</p>
    </div>
    <div v-else>
      <div class="mb-2 flex justify-between">
        <label class="mr-2" for="email">email:</label>
        <input v-model="email" class="" id="email" type="text" />
      </div>
      <div class="mb-2 flex justify-between">
        <label class="mr-2" for="password">password:</label>
        <input v-model="password" class="" id="password" type="password" />
      </div>
      <button
        @click.prevent="login"
        class="
          py-2
          px-4
          bg-green-500
          text-white
          font-semibold
          rounded-lg
          shadow-md
          hover:bg-green-700
          focus:outline-none
          focus:ring-2 focus:ring-green-400 focus:ring-opacity-75
        "
      >
        Click me
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed  } from "vue";
import { useStore } from "vuex";

export default {
  name: "login",
  setup() {
    const store = useStore();

    const email = ref("@hotmail.com");
    const password = ref("");
    const joined = computed (()=>{
      return store.state.userLoggedIn
    });
    
    const login = async () => {
      console.log(email.value, "\n", password.value);
      try {
        await store.dispatch("login", {
          password: password.value,
          email: email.value,
        });
        // joined.value = true;
      } catch (e) {
        console.log(e);
      }
    };

    return {
      joined,
      email,
      password,
      login,
    };
  },
};
</script>
