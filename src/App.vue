<template>
  <div id="app">
    <ProductItem
      v-for="item in list"
      :product_name="item.product_name"
      :brand_name="item.brand_name"
      :manufacturer_name="item.manufacturer_name"
      v-bind:key="item"
    >
      {{ item.product_name }}
      {{ item.brand_name }}
      {{ item.manufacturer_name }}
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
        //console.log(response.data);
        let _data = response.data.data;
        //console.log("data", _data);
        //this.list.push(_data.list);
        _data.list.forEach(element => {
          this.list.push(element);
        });
        //this.list.concat(_data.list);
        //console.log(_data.list);

        //let res = response.data.response.body;
        //console.log(res);
      });
    },
    more() {
      this.page += 1;
      this.product();
      //   const options = {
      //     params: {
      //       _page: this.page++,
      //       _limit: 5,
      //     },
      //   };
      //   this.page++;
      //   axios
      //     .get("http://127.0.0.1:5000/v1/product", options)
      //     .then(res => {
      //       let _data = res.data.data;
      //       console.log(_data);
      //       this.list = [...this.list, ..._data.list];
      //       // console.log(this.list);
      //     })
      //     .catch(err => console.error(err));
    },
  },
  ctreated: {
    function() {
      this.more();
    },
  },
};
</script>
