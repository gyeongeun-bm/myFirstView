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

export default {
  props: {
    brand_name: { required: true, type: String },
    product_name: { required: true, type: String },
    manufacturer_name: { required: true, type: String },
    img: { required: true, type: String },
    favor: { required: true, type: String },
    product_id: { required: true, type: Number },
  },

  name: "ProductItem",
  // components: {
  //   ProductItem,
  // },
  data() {
    return {
      list: [],
      page: 1,
      favorit: new Map(),
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
