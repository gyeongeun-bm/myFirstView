<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li>
        <to-do-item label="My ToDo Item"></to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";
import axios from "axios"

export default {
  name: "app",
  components: {
    ToDoItem,
  },
  beforeMount() {
    console.log("beforeMount")

    this.test()
  },
  methods: {
    test() {
      console.log("test")
      axios.get('http://127.0.0.1:5000/v1/manufacturer').then((response) => {
        console.log(response.data);
        let res = response.data.response.body
        console.log(res);
      })
    }

  }
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
