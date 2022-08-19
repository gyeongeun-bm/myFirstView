<template>
  <div id="app">
    <ProductItem
      v-for="item in list"
      :product_name="item.product_name"
      :product_id="item.id"
      :brand_name="item.brand_name"
      :manufacturer_name="item.manufacturer_name"
      :img="item.img"
      v-bind:key="item"
      :favor="favor.get(item.id)"
    >
      {{ item.product_name }}
      {{ item.brand_name }}
      {{ item.manufacturer_name }}
      {{ item.img }}
      {{ item.id }}
      {{ favor.get(item.id) }}
    </ProductItem>
  </div>
  <div>
    <button @click="more">더보기</button>
  </div>
</template>

<script>
import axios from "axios";
import ProductItem from "./components/ProductItem.vue";

export default {
  name: "app",
  components: {
    ProductItem,
  },
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
          console.log("http://127.0.0.1:5000/v1/favor/product/" + element.id);
          axios
            .get("http://127.0.0.1:5000/v1/favor/product/" + element.id)
            .then(res => {
              this.favor.set(element.id, res.data.message);
            });
        });
        // const array = this.list.concat(_data.list);
        // console.log(array);
      });
    },
    more() {
      this.page += 1;
      this.product();
    },
  },
};
</script>
