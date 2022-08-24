<template>
    <div class="app-list">
        <ProductItems
            v-for="item in list"
            :data="item"
            v-bind:key="item"
        >
            {{ item.product_name }}
            {{ item.brand_name }}
            {{ item.manufacturer_name }}
            {{ item.img }}
            {{ item.id }}

        </ProductItems>
    </div>
    <div>
        <button @click="more">더보기</button>
    </div>
</template>

<script>
import axios from "axios";
import ProductItems from "@/views/products/ProductItems";

export default {
    name: "ProductList",
    data() {
        return {
            list: [],
            page: 1,
        };
    },
    components: {
        ProductItems
    },
    beforeMount() {
        console.log("beforeMount");
        this.list = [];
        this.page = 1;
        this.severRequest();
    },
    methods: {
        severRequest() {
            const options = {
                params: {
                    page: this.page,
                    per_page: 5,
                },
            };
            axios.get("http://127.0.0.1:5000/v1/product", options).then(response => {
                const _data = response.data.data;
                this.list = [...this.list, ..._data.list]

                // _data.list.forEach(element => {
                //     this.list.push(element);
                //     // axios
                //     //     .get("http://127.0.0.1:5000/v1/favor/product/" + element.id)
                //     //     .then(res => {
                //     //         console.log(res)
                //     //         // this.favor.set(element.id, res.data.message);
                //     //     });
                // });
                // const array = this.list.concat(_data.list);
                // console.log(array);
            });
        },
        more() {
            this.page += 1;
            this.severRequest();
        },
    },
}
</script>

<style scoped>
.app-list {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.box p {
    margin: 10px;
}
</style>