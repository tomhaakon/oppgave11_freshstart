<template>
  <v-app>
    <topNavBar />
    <v-main class="grey lighten-1">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!-- innhold -->
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import topNavBar from "@/components/nav/navBar.vue";
import footerBar from "@/components/nav/footerBar.vue";
export default {
  components: {
    topNavBar,
    footerBar,
  },
};
</script>
