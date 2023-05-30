<template>
  <v-footer class="bg-indigo-lighten-1">
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined">
          <v-card-title>Heading</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos autem
            consequuntur atque a cum culpa placeat consectetur, vero eum in quo,
            voluptate libero? Mollitia molestiae corrupti amet, quo accusantium
            obcaecati.
            <div class="mt-2" style="display: flex; gap: 10px">
              <v-btn icon variant="outlined">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>

              <v-btn icon variant="outlined">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>

              <v-btn icon variant="outlined">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined">
          <v-card-title>Heading</v-card-title>
          <v-card-text>
            <v-list density="compact" nav>
              <v-list-item title="My Files" value="myfiles"></v-list-item>
              <v-list-item title="Shared with me" value="shared"></v-list-item>
              <v-list-item title="Starred" value="starred"></v-list-item>
              <v-list-item title="Starred" value="starred"></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined">
          <v-card-title>Heading</v-card-title>
          <v-card-text>
            <v-list density="compact" nav>
              <v-list-item title="My Files" value="myfiles"></v-list-item>
              <v-list-item title="Shared with me" value="shared"></v-list-item>
              <v-list-item title="Starred" value="starred"></v-list-item>
              <v-list-item title="Starred" value="starred"></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined">
          <v-card-title>Newsletter</v-card-title>
          <v-card-text>
            Subscribe to our newsletter for latest updates
            <div>
              <div class="mt-2">
                <v-responsive width="300">
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
              <v-btn class="mt-3" variant="outlined">Subscribe</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
  <div class="d-flex g-3 flex-column justify-center bg-indigo-darken-1 pa-3" style="height: 80px;">
    <p class="text-center">
      © 2021 Copyright: Website.com
    </p>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
