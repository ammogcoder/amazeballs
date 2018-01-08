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
  name: 'inputform',
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    signInWithEmailAndPassword() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    },
    signInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  }
}
</script>