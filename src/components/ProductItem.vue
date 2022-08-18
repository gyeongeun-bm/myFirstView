<template>
  <div class="content">
    <p>{{ brand_name }}</p>
    <p>{{ product_name }}</p>
    <p>{{ manufacturer_name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    brand_name: { required: true, type: String },
    product_name: { required: true, type: String },
    manufacturer_name: { required: true, type: String },
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

.content {
  display: flex;
  justify-content: center;
  align-items: left;
}
</style>
