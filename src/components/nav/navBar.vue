<template>
  <v-app-bar color="white" flat>
    <!-- meny for desktop -->
    <v-container class="d-none d-sm-flex">
      <!-- logo og overskrift for desktop -->
      <v-btn-toggle v-model="toggle_btn" group>
        <v-btn :to="homeLink" plain>
          <v-icon color="black" size="35" :to="homeLink" class="mr-10">
            {{ logoIcon }}
          </v-icon>
          {{ logoHeaderTitle }}
        </v-btn>
        <v-btn v-for="link in links" :key="link.title" :to="link.path">
          {{ link.title }}
        </v-btn>
      </v-btn-toggle>
    </v-container>

    <!-- drawer knapp for mobil-->
    <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
    <v-container class="d-flex d-sm-none">
      <!-- logo og overskrift for mobil -->
      <v-btn :to="homeLink" plain left>
        <v-icon color="black" size="32" left class="mr-10">{{
          logoIcon
        }}</v-icon
        >{{ logoHeaderTitle }}
      </v-btn>

      <!-- drawer meny for mobil -->
      <v-navigation-drawer v-model="drawer" absolute width="100%" height="auto">
        <v-list nav>
          <v-list-item-group>
            <v-list-item v-for="(link, index) in links">
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <!-- drawer slutt -->
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    toggle_btn: null,
    homeLink: "/",
    logoHeaderTitle: "VUE2 APP",
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
