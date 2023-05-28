<template>
  <v-app id="inspire">
    <!-- navbar -->
    <v-main class="secondary">
      <topNavBar />
      <v-container>
        <v-row>
          <v-col>
            <v-sheet rounded="md" class="pt-5 pl-5">
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
