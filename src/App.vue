<template>
  <nav>
    <PropsTest :propsString="propsString" />
    <MyHearder />
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> | <router-link to="/modal">Modal</router-link> | <router-link to="/card">Card</router-link> | <router-link to="/login">login</router-link> |
    <router-link to="/modalAdress">ModalAdress</router-link>
  </nav>

  <router-view />
</template>

<script>
import MyHearder from "./components/Header.vue";
import PropsTest from "./components/PropsTest.vue";

export default {
  name: "Header",
  components: {
    MyHearder,
    PropsTest,
  },
  data() {
    return {
      sampleData: "",
      propsString: "props 실습이에용~",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
