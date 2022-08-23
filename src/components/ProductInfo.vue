<template>
  <div class="content">
    <div class="box">
      <img :src="img" />
      <p>{{ product_name }}</p>
      <p>{{ manufacturer_name }}</p>
      <p>{{ brand_name }}</p>
      <p>{{ category }}</p>
      <p>{{ price }}</p>
      <p>{{ favor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: { required: true, type: String },
    product_name: { required: true, type: String },
    manufacturer_name: { required: true, type: String },
    brand_name: { required: true, type: String },
    category: { required: true, type: String },
    price: { required: true, type: String },
    favor: { required: true, type: String },
    product_id: { required: true, type: Number },
  },
};
</script>
