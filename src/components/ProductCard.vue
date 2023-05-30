<template>
  <v-card class="mx-auto" max-width="400">
    <v-hover>
      <v-img
        @mouseover="showOptions = true"
        @mouseleave="showOptions = false"
        class="align-end text-white"
        height="200"
        src="../assets/images/cup.jpg"
        cover
      >
        <v-expand-transition
          class="d-flex transition-fast-in-fast-out v-card--reveal"
        >
          <div v-if="showOptions" class="ma-1 d-flex justify-center" style="gap: 2px">
            <v-btn variant="outlined">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn variant="outlined">Add to Cart</v-btn>
          </div>
        </v-expand-transition>
      </v-img>
    </v-hover>
    
    <v-card-title>{{ data.title }}</v-card-title>
    <v-card-text>
      <div>{{ data.price }}</div>
      <v-btn class="mt-2" block variant="tonal" to="/productdetails">Details</v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "ProductCard",
   props: ['data'],
  data() {
    return {
      showOptions: false,
    };
  },
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
}
</style>
