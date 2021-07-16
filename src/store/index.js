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
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      await userCollection.doc(userCred.user.uid).set({
        name: payload.name,
        age: +payload.age,
        email: payload.email,
      });

      await userCred.user.updateProfile({
        displayName: payload.name
      })
      commit("toggleAuth");

    }

  },
  modules: {
  }
})
