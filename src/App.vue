<template>
  <v-app>
    <!-- navbar -->
    <topNavBar />
    <v-main class="secondary">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="md">
              <!-- innhold -->
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
        <!-- footer -->
        <footerBar />
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
