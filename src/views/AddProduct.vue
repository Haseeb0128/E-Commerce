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
          <v-list-item
            title="View Products"
            to="/admin"
            value="myfiles"
          ></v-list-item>
          <v-list-item
            title="Add Product"
            value="shared"
          ></v-list-item>
          <v-list-item
            title="Edit Product"
            to="/editproduct"
            value="starred"
          ></v-list-item>
          <v-spacer></v-spacer>
          <v-list-item>
            <v-btn block variant="tonal" style="line-height: 60px"
              >Logout</v-btn
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 100vh">
        <v-container class="mt-10">
          <v-form style="max-width: 600px" class="mx-auto">
            <h1 class="mb-5">Add Product</h1>
            <v-text-field label="Image URL" variant="outlined"></v-text-field>
            <v-text-field
              label="Product Name"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              label="Product Price"
              variant="outlined"
            ></v-text-field>
            <v-btn variant="tonal" size="large">Submit</v-btn>
          </v-form>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: "AddProduct",
};
</script>
