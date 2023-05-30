<template>
  <v-sheet class="mx-auto my-10" width="350" style="height: 100vh;">
    <v-form>
      <h1 class="mb-3">Login</h1>
      <v-text-field variant="outlined" label="User Name"></v-text-field>
      <v-text-field variant="outlined" type="password" label="Password"></v-text-field>
      <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>
      <v-btn block class="my-4" color="blue-darken-3">Sign in</v-btn>
    </v-form>
    <div class="mt-2">
      <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
    </div>
  </v-sheet>
</template>
