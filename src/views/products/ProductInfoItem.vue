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
      <p></p>
    </div>
  </div>

  <div id="app">
    <ProductInfoItem
      v-for="item in list"
      :product_name="item.product_name"
      :manufacturer_name="item.manufacturer_name"
      :brand_name="item.brand_name"
      :category="item.category"
      :price="item.price"
      :img="item.img"
      :favor="favor.get(item.id)"
    >
      {{ item.product_name }}
      {{ item.manufacturer_name }}
      {{ item.brand_name }}
      {{ item.category }}
      {{ item.price }}
      {{ item.img }}
      {{ favor.get(item.id) }}
    </ProductInfoItem>
  </div>
</template>

<script>
import axios from "axios";

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

  name: "ProductInfoItem",

  data() {
    return {
      list: [],
      page: 1,
      favor: new Map(),
    };
  },
  beforeMount() {
    console.log("beforeMount");
    this.list = [];
    this.page = 1;
    this.product();
  },
  methods: {
    product() {
      console.log(this.page);

      const options = {
        params: {
          page: this.page,
          per_page: 5,
        },
      };
      axios.get("http://127.0.0.1:5000/v1/product", options).then(response => {
        const _data = response.data.data;
        console.log(_data);
        _data.list.forEach(element => {
          this.list.push(element);
          axios
            .get("http://127.0.0.1:5000/v1/product/" + element.id)
            .then(res => {
              this.favor.set(element.id, res.data.message);
            });
        });
      });
    },
    more() {
      this.page += 1;
      this.product();
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
