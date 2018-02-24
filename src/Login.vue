<template>
  <div>
    <form @submit.prevent="signInWithEmailAndPassword">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" />
      <input type="submit" />
    </form>

    <button @click.prevent="signInWithGoogle">Log in with Google</button>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    signInWithEmailAndPassword() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch((err) => alert(err.message || err));
    },
    signInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .catch((err) => alert(err.message || err));
    }
  }
}
</script>