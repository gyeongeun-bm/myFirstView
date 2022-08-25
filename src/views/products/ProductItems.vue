<template>
  <div class="content">
    <div class="box">
      <!--            <p id="favor">{{ favor }}</p>-->
      <p>{{ data.brand_name }}</p>
      <p>{{ data.product_name }}</p>
      <p>{{ data.manufacturer_name }}</p>
      <p>{{ data.product_id }}</p>
      <img :src="data.img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { required: true, type: Object },
  },
  name: "ProductItem",
  beforeMount() {
    console.log("beforeMount");
    this.list = [];
    this.page = 1;
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  border: solid 1px gray;
  margin-bottom: 10px;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  /* white-space: nowrap; */
  width: 300px;
  height: 200px;
  text-align: center;
}

.box p {
  margin: 10px;
}

.favor {
  color: orangered;
}
</style>
