<template>
  <v-container>
    <Carousel />
    <div class="my-6">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="my-10">
      <v-row>
        <v-col cols="6" md="6" lg="3">
          <!-- <v-card height="100%" class="mx-auto" max-width="400">
            <v-img style="height: 150px" cover :src="n.thumbnail"></v-img>
            <v-card-title>{{ n.title }}</v-card-title>
            <v-card-text>${{ n.price }}</v-card-text>
            <v-card-actions>
              <v-btn>Details</v-btn>
              <v-btn><v-icon>mdi-cart</v-icon></v-btn>
            </v-card-actions>
          </v-card> -->
          <ProductCard v-for="product in products" :key="product.id" :data="product" />
        </v-col>
      </v-row>
    </div>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination v-model="page" class="my-1" :length="totalPages"></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Product Sales Section -->
    <div class="my-15">
      <v-row>
        <v-col cols="12" md="4">
          <v-list>
            <v-list-item-title>Best Seller</v-list-item-title>
          </v-list>
          <v-divider class="border-opacity-50"></v-divider>
          <v-list>
            <v-list-item to="/productdetails" v-for="n in 3" :key="n">
              <div class="d-flex" style="gap: 10px">
                <v-flex
                  ><v-img src="../assets/images/cup.jpg" :width="100"></v-img
                ></v-flex>
                <div>
                  <p>Product Name</p>
                  <p>$50</p>
                </div>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <v-list>
            <v-list-item-title>New Arrival</v-list-item-title>
          </v-list>
          <v-divider class="border-opacity-50"></v-divider>
          <v-list>
            <v-list-item to="/productdetails" v-for="n in 3" :key="n">
              <div class="d-flex" style="gap: 10px">
                <v-flex
                  ><v-img src="../assets/images/cup.jpg" :width="100"></v-img
                ></v-flex>
                <div>
                  <p>Product Name</p>
                  <p>$50</p>
                </div>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <v-list>
            <v-list-item-title>Featured</v-list-item-title>
          </v-list>
          <v-divider class="border-opacity-50"></v-divider>
          <v-list>
            <v-list-item to="/productdetails" v-for="n in 3" :key="n">
              <div class="d-flex" style="gap: 10px">
                <v-flex
                  ><v-img src="../assets/images/cup.jpg" :width="100"></v-img
                ></v-flex>
                <div>
                  <p>Product Name</p>
                  <p>$50</p>
                </div>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>
    <!-- Cool grid -->
    <div class="my-15">
      <ImageGrid />
    </div>
    <div class="my-15">
      <v-row>
        <v-col>
          <div class="d-flex flex-column" style="gap: 10px">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              inventore et amet tempore.
            </p>
            <div>
              <v-btn variant="tonal" block>Shop Now</v-btn>
            </div>
          </div>
        </v-col>
        <v-col>
          <GroupSlider />
        </v-col>
      </v-row>
      <v-divider class="my-5 border-opacity-50"></v-divider>
      <v-row>
        <v-col>
          <div class="d-flex flex-column" style="gap: 10px">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              inventore et amet tempore.
            </p>
            <div>
              <v-btn variant="tonal" block>Shop Now</v-btn>
            </div>
          </div>
        </v-col>
        <v-col>
          <GroupSlider />
        </v-col>
      </v-row>
    </div>
    <div class="my-15">
      <v-row>
        <v-col cols="6" md="3">
          <v-img src="../assets/images/logo.png"></v-img>
        </v-col>
        <v-col cols="6" md="3">
          <v-img src="../assets/images/logo.png"></v-img>
        </v-col>
        <v-col cols="6" md="3">
          <v-img src="../assets/images/logo.png"></v-img>
        </v-col>
        <v-col cols="6" md="3">
          <v-img src="../assets/images/logo.png"></v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import ProductCard from "@/components/ProductCard.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import GroupSlider from "@/components/GroupSlider.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      category: [],
      selectedCategory: null,
      products: [],
      page: 1,
      perPage: 8,
    };
  },
  methods: {
    async displayProducts() {
      const result = await axios.get("https://dummyjson.com/products");
      console.log(result.data);
      this.products = result.data.products;
      console.log(result.data.products);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
    displayedProducts() {
      const startIndex = (this.page - 1) * this.perPage;
      console.log(startIndex)
      const endIndex = startIndex + this.perPage;
      console.log(endIndex)
      return this.products.slice(startIndex, endIndex);
    },
  },
  components: {
    Carousel,
    ProductCard,
    ImageGrid,
    GroupSlider,
  },
  mounted() {
    this.displayProducts();
  },
};
</script>
