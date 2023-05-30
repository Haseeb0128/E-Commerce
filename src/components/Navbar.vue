<template>
  <v-app-bar>
    <div class="d-lg-none d-xl-flex">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </div>

    <div class="mx-4"><router-link to="/">Logo</router-link></div>
    <v-list class="d-none d-lg-flex d-xl-none">
      <v-list-item value="categories" to="/categories">Categories</v-list-item>
      <v-list-item value="about us" to="/about">About Us</v-list-item>
      <v-list-item value="contact us" to="/contact">Contact Us</v-list-item>
    </v-list>

    <v-spacer></v-spacer>
    <div>
      <v-responsive class="d-none d-lg-flex d-xl-none mr-5" width="250">
        <v-text-field
          density="compact"
          variant="outlined"
          label="Search"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-responsive>
    </div>
    <div class="d-none d-sm-flex">
      <v-btn variant="outlined" to="/login" class="mr-2">Login</v-btn>
      <v-btn variant="outlined" to="/signup">Signup</v-btn>
    </div>
    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn icon to="/admin">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="top" class="d-lg-none d-xl-flex" style="height: auto;">
    <v-list>
      <v-list-item value="categories" to="/">Home</v-list-item>
      <v-list-item value="categories" to="/categories">Categories</v-list-item>
      <v-list-item value="about us" to="/about">About Us</v-list-item>
      <v-list-item value="contact us" to="/contact">Contact Us</v-list-item>
      <v-list-item value="Login" to="/login">Login</v-list-item>
      <v-list-item value="SignUp" to="/signup">Signup</v-list-item>
      <v-list-item>
        <v-responsive>
          <v-text-field
            density="compact"
            variant="outlined"
            label="Search"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </v-responsive>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
