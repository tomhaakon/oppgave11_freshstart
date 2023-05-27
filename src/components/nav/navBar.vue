<template>
  <v-app-bar color="white" flat fluid style="z-index: 3">
    <!-- desktop -->
    <v-container class="d-none d-sm-flex">
      <!-- logo og overskrift for desktop -->
      <v-btn href="/" isActive="false" class="ml-11 ma-3" elevation="0">
        <v-icon color="black" size="35">
          {{ logoIcon }}
        </v-icon>
        <v-app-bar-title class="ml-3">
          {{ logoHeaderTitle }}
        </v-app-bar-title>
      </v-btn>
      <!-- linker  -->
      <v-btn-toggle v-model="toggle_btn" group class="ml-5">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.path"
          :ripple="false"
        >
          {{ link.title }}
        </v-btn>
      </v-btn-toggle>
    </v-container>

    <!-- mobil  -->
    <!-- drawer knapp -->
    <v-app-bar-nav-icon
      @click="$refs.openDrawer.openDrawerForMobile(links)"
      class="d-flex d-sm-none"
    >
    </v-app-bar-nav-icon>
    <v-container class="d-flex d-sm-none">
      <!-- logo og overskrift f -->
      <v-btn elevation="0">
        <v-icon color="black" size="32" class="mr-4">{{ logoIcon }}</v-icon>

        <v-app-bar-title class="ma-2 ml-0">
          {{ logoHeaderTitle }}
        </v-app-bar-title>
      </v-btn>
      <!-- drawer meny mobil -->
      <mobileMenuDrawer ref="openDrawer" />
    </v-container>
  </v-app-bar>
</template>
<script>
import mobileMenuDrawer from "@/components/nav/menuDrawer.vue";
export default {
  components: {
    mobileMenuDrawer,
  },
  data: () => ({
    toggle_btn: null,
    homeLink: "/", // root
    logoHeaderTitle: "VUE2 APP", // tittel på siden
    logoIcon: "mdi-linux", // icon brukes til logo
    links: [
      {
        title: "Resources",
        path: "/resources",
      },
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Login",
        path: "/login",
      },
      {
        title: "Register",
        path: "/register",
      },
    ],
  }),
};
</script>
<style>
#custom-disabled {
  background-color: transparent;
}
</style>
