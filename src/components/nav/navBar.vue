<template>
  <v-app-bar color="white" flat>
    <!-- drawer knapp for mobil-->
    <v-app-bar-nav-icon
      @click="$refs.openDrawer.openDrawerForMobile(links)"
      class="d-flex d-sm-none"
    >
    </v-app-bar-nav-icon>
    <!-- meny for desktop -->
    <v-container class="d-none d-sm-flex">
      <!-- logo og overskrift for desktop -->

      <v-btn class="ma-2" elevation="0" color="white" :ripple="false">
        <v-icon color="black" size="35" :to="homeLink" class="mr-10">
          {{ logoIcon }} </v-icon
        >{{ logoHeaderTitle }}</v-btn
      >

      <v-btn-toggle v-model="toggle_btn" group>
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
    <!-- meny for mobil  -->

    <v-container class="d-flex d-sm-none">
      <!-- logo og overskrift for mobil -->
      <v-btn :to="homeLink" plain left>
        <v-icon color="black" size="32" left class="mr-8">{{ logoIcon }}</v-icon
        >{{ logoHeaderTitle }}
      </v-btn>

      <!-- drawer meny mobil -->
      <mobileMenuDrawer ref="openDrawer" />
    </v-container>
    <!-- drawer slutt -->
  </v-app-bar>
</template>
<script>
import mobileMenuDrawer from "@/components/menuDrawer.vue";
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
        path: "/resoures",
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
<!-- <style>
.v-ripple__container {
  display: none !important;
}
</style> -->
