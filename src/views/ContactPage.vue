<template>
    <v-container style="max-width: 600px;" class="my-10">
      <h1>Contact Page</h1>
      <v-form class="mt-5">
        <div class="d-flex" style="gap: 15px">
            <v-text-field label="First Name" variant="outlined"></v-text-field>
            <v-text-field label="Last Name" variant="outlined"></v-text-field>
        </div>
        <v-text-field label="Email" variant="outlined"></v-text-field>
        <v-text-field label="Phone No." variant="outlined"></v-text-field>
        <v-textarea
          variant="outlined"
          label="Write Message Here"
        ></v-textarea>
        <v-btn size="large" variant="outlined">Submit</v-btn>
      </v-form>
    </v-container>
  
</template>
<script>
export default {
  name: "ContactPage",
};
</script>
