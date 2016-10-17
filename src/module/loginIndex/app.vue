<template>
  <div id="app">
    <demo></demo>
    <hello></hello>
    <Countdown @click="loginAction"></Countdown>
    <p>
      Welcome to your Vue.js app1 loginInd13131ex221231233!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.{{ count }}
    </p>
  </div>
</template>

<script>
import Demo from './../../components/Demo'
import Hello from './../../components/Hello'
import Countdown from './../../components/Countdown'

export default {
  components: {Demo, Hello, Countdown},
  data () {
    return {
      count: 10
    }
  },
  mounted () {
    this.handle = setInterval(() => {
      this.count++
    }, 1000)
  },
  destroyed () {
    clearInterval(this.handle)
  },
  methods: {
    loginAction () {
      this.count++
      setTimeout(() => {
        window.location.href = 'welcome.html'
      }, 1000)
    },
    rememberPassword () {
      return this.remember_paw ? '&#xe6dd;' : '&#xe601;'
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #113e51;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
