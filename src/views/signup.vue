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
    <h3 class="mb-4 text-xl font-bold">Sign up for Toxic Positivity</h3>
    <div v-if="joined">
      <p class="font-mono ...">Be happy! 🤗 you are one of us now!</p>
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
      <div class="mb-2 flex justify-between">
        <label class="mr-2" for="name">name:</label>
        <input v-model="name" class="" id="name" type="text" />
      </div>
      <div class="mb-2 flex justify-between">
        <label class="mr-2" for="age">age:</label>
        <input v-model="age" class="" id="age" type="text" />
      </div>
      <div class="flex justify-between">
        <button
          @click.prevent="signup"
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
          Signup
        </button>
        <button
          @click.prevent="goToLogin()"
          class="
            py-2
            px-4
            bg-blue-500
            text-white
            font-semibold
            rounded-lg
            shadow-md
            hover:bg-blue-700
            focus:outline-none
            focus:ring-2 focus:ring-green-400 focus:ring-opacity-75
          "
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "signup",
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref("@hotmail.com");
    const password = ref("");
    const name = ref("");
    const age = ref("");
    const joined = computed(() => {
      return store.state.userLoggedIn;
    });

    const goToLogin = ()=>{ router.push('login') }

    const signup = async () => {
      console.log(email.value, "\n", password.value);
      try {
        await store.dispatch("register", {
          name: name.value,
          password: password.value,
          age: +age.value,
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
      name,
      age,
      signup,
      goToLogin,
    };
  },
};
</script>
