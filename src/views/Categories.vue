<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="6" md="3" v-for="n in category" :key="n">
        <v-card @click="getProductByCategory(n)">
          <div
            style="background-color: cadetblue; width: auto; height: 150px"
            class="align-end text-white"
          >
            <v-card-title>{{ n }}</v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <h1>Selected Category: {{ selectedCategory }}</h1>
    <h2>Products:</h2>
    <div class="my-10">
      <v-row>
        <v-col cols="6" md="3" v-for="n in products" :key="n">
          <v-card height="100%">
            <v-img :src="n.thumbnail" style="height: 150px"></v-img>
            <v-card-title>{{ n.title }}</v-card-title>
            <v-card-text>${{ n.price }}</v-card-text>
            <v-card-actions>
              <v-btn>Details</v-btn>
              <v-btn><v-icon>mdi-cart</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "Categories",
  data() {
    return {
      category: [],
      selectedCategory: null,
      products: [],
    };
  },
  methods: {
    async getCategories() {
      const result = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      this.category = result.data;
    },
    async getProductByCategory(category) {
      this.selectedCategory = category;
      await fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
          console.log(this.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
