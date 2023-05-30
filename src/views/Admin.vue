<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer app>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Muhammad Haseeb"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item title="View Products" to="/admin" value="myfiles"></v-list-item>
          <v-list-item title="Add Products" value="shared" to="/addproduct"></v-list-item>
          <v-list-item title="Edit Products" value="starred" to="/editproduct"></v-list-item>
          <v-spacer></v-spacer>
          <v-list-item>
            <v-btn block variant="tonal" style="line-height: 60px"
              >Logout</v-btn
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 100vh" class="mb-10">
        <v-container>
          <div class="d-flex flex-column" style="gap: 15px; margin-bottom: 15px;">
            <h1>Dashboard</h1>
            <h3>All Products</h3>
          </div>
            <v-row>
              <v-col cols="6" md="6" lg="3" v-for="n in product" :key="n">
                <v-card height="100%">
                  <v-img cover style="height:150px" :src="n.thumbnail"></v-img>
                  <v-card-title>{{ n.title }}</v-card-title>
                  <v-card-text>${{ n.price }}</v-card-text>
                  <v-card-actions>
                    <v-btn>Edit</v-btn>
                    <v-btn @click="deleteProduct(n.id)">Delete</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import axios from 'axios';

export default {
  name: "Admin",
  data() {
        return {
            product:[]
        }
    },
  methods:{
    async displayProducts(){
      const result = await axios.get("https://dummyjson.com/products")
      console.log(result.data)
      this.product = result.data.products
      console.log(result.data.products)
    },
    async deleteProduct(id){
      const stored = await axios.delete("https://dummyjson.com/products/" + id);
      console.log("Delete btn clicked")
      if(stored.status == 200)
      {
        this.displayProducts();
      }
    },
  },
  mounted(){
    this.displayProducts();
  },
};
</script>
