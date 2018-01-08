<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Login v-if="!store.currentUser" />
    <div v-else>
      <InputForm />
      <BallsFeed />
    </div>
  </div>
</template>

<script>
import { store } from './store';
import Login from './Login';
import InputForm from './InputForm';
import BallsFeed from './BallsFeed';

export default {
  name: 'app',
  components: { Login, InputForm, BallsFeed },
  data() {
    return {
      store
    };
  },
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
