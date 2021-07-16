import { createStore } from 'vuex'
import { auth, userCollection } from "@/includes/firebase";

export default createStore({
  state: {
    userLoggedIn: false
  },
  mutations: {
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn
    }
  },
  actions: {
    async register({commit}, payload) {
      await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      await userCollection.add({
        name: payload.name,
        age: +payload.age,
        email: payload.email,
      });
      commit("toggleAuth");

    }

  },
  modules: {
  }
})
