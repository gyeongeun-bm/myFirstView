<template>
  <div id="app">
    <h1>List Test</h1>
    <ul></ul>
    <to-do-item
      v-for="item in list"
      :label="item.name"
      v-bind:key="item"
    ></to-do-item>
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
  data() {
    return {
      list: null,
      title: "test",
    };
  },
  beforeMount() {
    console.log("beforeMount");

    this.test();
  },
  methods: {
    test() {
      console.log("test");
      axios.get("http://127.0.0.1:5000/v1/manufacturer").then(response => {
        //console.log(response.data);
        let _data = response.data.data;
        console.log(_data);
        this.list = _data.list;
        console.log(this.list);
        //let res = response.data.response.body;
        //console.log(res);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
