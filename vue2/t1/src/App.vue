<template>
  <div id="app">
    <app-landing-header></app-landing-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <LandingHeader/>
    <p>app data {{message}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LandingHeader from './components/LandingHeader.vue'

export default {
  name: 'App',
  data:()=>{ return{message:"testisngs"}},
  components: {
    HelloWorld,
    LandingHeader,
  }
}
</script>

<style>
@import 'assets/mainStyles.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
