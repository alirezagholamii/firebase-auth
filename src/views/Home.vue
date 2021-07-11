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
      <p class="font-mono ...">Be happy! 🤗 you are one of us now! </p>
    </div>
    <div v-else>
      <div class="mb-2 flex justify-between">
        <label class="mr-2" for="email">email:</label>
        <input v-model="email" class="" id="email" type="text" />
      </div>
      <div class="mb-2">
        <label class="mr-2" for="password">password:</label>
        <input v-model="password" class="" id="password" type="password" />
      </div>
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
        Click me
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import firebase from "../includes/firebase";
export default {
  name: "Home",
  setup() {
    const email = ref("rrr@hotmail.com");
    const password = ref("");
    const joined = ref(false);

    const signup = async () => {
      console.log(email.value, "\n", password.value);
      try {
        const userCred = await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        console.log(userCred);
        joined.value = true;
      } catch (e) {
        console.log(e);
      }
    };

    return {
      joined,
      email,
      password,
      signup,
    };
  },
};
</script>
