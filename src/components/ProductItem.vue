<template>
  <div class="content">
    <div class="box">
      <p id="favor">{{ favor }}</p>
      <p>{{ brand_name }}</p>
      <p>{{ product_name }}</p>
      <p>{{ manufacturer_name }}</p>
      <!-- <p>{{ product_id }}</p> -->
      <img :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand_name: { required: true, type: String },
    product_name: { required: true, type: String },
    manufacturer_name: { required: true, type: String },
    img: { required: true, type: String },
    favor: { required: true, type: String },
    product_id: { required: true, type: Number },
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
  flex-direction: column;
  align-items: center;
}
.box {
  border: solid 1px gray;
  margin-bottom: 10px;
  width: 300px;
  height: 150px;
  text-align: center;
}
.box p {
  margin: 10px;
}
#favor {
  color: orangered;
}
</style>
