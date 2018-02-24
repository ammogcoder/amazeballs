<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Login v-if="!store.currentUser" />
    <div v-else>
      <button @click="logout">Log out</button>
      <InputForm />
      <BallsFeed />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

import { store } from './store';
import Login from './Login';
import InputForm from './InputForm';
import BallsFeed from './BallsFeed';

export default {
  components: { Login, InputForm, BallsFeed },
  data() {
    return {
      store
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .catch((err) => alert(err.message || err));
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
