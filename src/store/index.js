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
    async login({ commit }, payload) {
      console.log(payload);
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      commit('toggleAuth')
    },
    initLogin({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit('toggleAuth')
      }
    },
    async register({ commit }, payload) {
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

    },
    async logout({ commit }) {
      await auth.signOut()
      commit('toggleAuth')
    }

  },
  modules: {
  }
})
