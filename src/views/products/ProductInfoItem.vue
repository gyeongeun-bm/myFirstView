<template>
  <div class="content">
    <div class="info_box">
      <img :src="img" />
      <p>키워드: {{ keyword }}</p>
      <p>제품명: {{ product_name }}</p>
      <p>제조사명: {{ manufacturer_name }}</p>
      <p>브랜드명: {{ brand_name }}</p>
      <p>카테고리: {{ category_name }} > {{ category_sub_name }}</p>
      <p>판매가격: {{ price }}</p>
      <p>주요효능/기능: {{ func }}</p>
      <p>피부타입: {{ skin_type }}</p>
      <p>용기타입: {{ case_type }}</p>
      <p>전성분: {{ ingredients }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductInfoItem",

  data() {
    return {
      list: [],
      param_id: 0,
      page: 1,
      keyword: "",
      product_name: "",
      manufacturer_name: "",
      brand_name: "",
      category_name: "",
      category_sub_name: "",
      price: "",
      func: "",
      skin_type: "",
      case_type: "",
      ingredients: "",
    };
  },
  beforeMount() {
    this.param_id = this.$route.params.id;
    console.log(this.param_id);
    if (this.param_id === null) {
      alert("잘못된 페이지 접근입니다.");
    }

    console.log("beforeMount");
    this.list = [];
    this.page = 1;
    this.product();
  },
  methods: {
    product() {
      axios
        .get("http://127.0.0.1:5000/v1/product/" + this.param_id)
        .then(response => {
          const _data = response.data.data;
          console.log(_data);

          this.keyword = _data.keyword;
          this.product_name = _data.product_name;
          this.manufacturer_name = _data.manufacturer_name;
          this.brand_name = _data.brand_name;
          this.category_name = _data.category_name;
          this.category_sub_name = _data.category_sub_name;
          this.price = _data.price;
          this.func = _data.func;
          this.skin_type = _data.skin_type;
          this.case_type = _data.case_type;
          this.ingredients = _data.ingredients;
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
.info_box {
  border: solid 1px gray;
  margin-bottom: 10px;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  /* white-space: nowrap; */
  width: 300px;
  height: 650px;
  text-align: center;
}
</style>
