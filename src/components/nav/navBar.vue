<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <router-link to="/">
        <v-avatar class="mr-10" color="secondary" size="32">
          <v-icon> mdi-linux </v-icon>
        </v-avatar>
      </router-link>
      <v-btn-toggle v-model="toggle_btn">
        <v-btn v-for="link in links" :key="link.title" :to="link.path">
          {{ link.title }}
        </v-btn>
      </v-btn-toggle>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
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
