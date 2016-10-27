<template>
  <div id="app">
    <p>count with getters {{countG}}</p>
    <p>count with export getters {{countEG}}</p>
    <p>count with Computed property: {{countC}}</p>
    <p>$store.state.count: {{$store.state.count}}</p>
    <button @click="incerement">+1</button>
    <button @click="addOne">addOne</button>
    <button @click="decerement">-1</button>
    <button @click="incerementx(10)">+10</button>
    <button @click="incerementx">+x</button>
  </div>
</template>

<script>
import Hello from './components/Hello'
// import * as actions from './vuex/actions'
import { incerement, decerement, incerementx } from './vuex/actions'
import store from './vuex/store'
import { countEG } from './vuex/getters'
export default {
  computed: {
    // 直接通过 store 获取值
    countC: () => store.state.count
  },
  components: {
    Hello
  },
  methods: {
    addOne () {
      this.incerement()
    }
  },
  ready () {
    // 通过 Vue 实例来获取 store 中的值
    console.log('get count with this.$store.state.count:', this.$store.state.count)
    // 直接通过 store 获取值
    console.log('get from import store', store.state.count)
  },
  vuex: {
    actions: { incerement, incerementx, decerement },
    // 通过 getters 获取 store 中的值
    getters: {
      countG: (state) => {
        return state.count
      },
      countEG
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
  color: #2c3e50;
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
