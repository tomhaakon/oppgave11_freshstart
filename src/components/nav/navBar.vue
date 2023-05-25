<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 d-none d-sm-flex">
      <!-- logo -->
      <router-link to="/">
        <v-avatar class="mr-10" size="32">
          <v-icon color="primary"> mdi-linux </v-icon>
        </v-avatar>
      </router-link>
      <v-btn-toggle v-model="toggle_btn" group>
        <v-btn v-for="link in links" :key="link.title" :to="link.path">
          {{ link.title }}
        </v-btn>
      </v-btn-toggle>
    </v-container>
    <v-container class="d-flex d-sm-none" fixed>
      <!-- MOBIL innhold -->
      <v-navigation-drawer permanent absolute width="100%">
        <v-list>
          <v-list-item v-for="link in links" :key="link.title" link>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- SLUTT MOBIL innhold -->
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    toggle_btn: null,
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
