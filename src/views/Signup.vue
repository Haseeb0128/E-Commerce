<template>
    <v-sheet class="mx-auto my-10" width="350" style="height: 100vh;">
      <v-form>
        <h1 class="mb-3">Signup</h1>
        <v-text-field variant="outlined" label="User Name"></v-text-field>
        <v-text-field variant="outlined" type="password" label="Password"></v-text-field>
        <v-btn block class="my-4" color="blue-darken-3">Sign up</v-btn>
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">Already have an account? <a href="#">Sign In</a></p>
      </div>
    </v-sheet>
  </template>
  <script>
  export default
  {
    name:'Signup'
  }
</script>
  