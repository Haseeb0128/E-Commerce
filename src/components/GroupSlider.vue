<template>
  <v-sheet  max-width="920">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="n in 6" :key="n">
        <ProductCard min-width="240" class="mr-4 my-2" />
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "GroupSlider",
  components: {
    ProductCard,
  },
};
</script>
