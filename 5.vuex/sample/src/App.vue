<template>
  <div id="app">
    <p>count with getters {{countG}}</p>
    <p>count with export getters {{countEG}}</p>
    <p>count with Computed property: {{countC}}</p>
    <p>$store.state.count: {{$store.state.count}}</p>
    <!-- <p v-if="isRequesting">send request now...</p> -->
    <button @click="incerement">+1</button>
    <button @click="addOne">addOne</button>
    <button @click="decerement">-1</button>
    <button @click="incerementx(10)">+10</button>
    <button @click="incerementx">+x</button>
    <button :disabled="isRequesting" @click="sendRequest">
      {{isRequesting ? 'Requesting' : 'Send Request'}}
    </button>
    <input v-model="username" />
    <input :value="user.name" @change="inputUserName" />
  </div>
</template>

<script>
import Hello from './components/Hello'
// import * as actions from './vuex/actions'
import { incerement, decerement, incerementx, sendRequest, updateUserName } from './vuex/actions'
import store from './vuex/store'
import { countEG } from './vuex/getters'
export default {
  computed: {
    // 直接通过 store 获取值
    countC: () => store.state.count,
    isRequesting: () => store.state.isRequesting,
    user: () => store.state.user,
    username: {
      get () {
        return store.state.user.name
      },
      set (v) {
        this.updateUserName(v)
      }
    }
  },
  components: {
    Hello
  },
  methods: {
    addOne () {
      this.incerement()
    },
    inputUserName (e) {
      this.updateUserName(e.target.value)
    }
  },
  ready () {
    // 通过 Vue 实例来获取 store 中的值
    console.log('get count with this.$store.state.count:', this.$store.state.count)
    // 直接通过 store 获取值
    console.log('get from import store', store.state.count)
  },
  vuex: {
    actions: { incerement, incerementx, decerement, sendRequest, updateUserName },
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
