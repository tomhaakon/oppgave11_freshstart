<template>
  <v-app-bar prominent app hide-on-scroll scroll-treshold="500">
    <!-- desktop -->
    <v-container class="d-none d-sm-flex">
      <!-- logo og overskrift for desktop -->
      <div>
        <v-btn
          href="/"
          :ripple="false"
          isActive="false"
          class=""
          elevation="0"
          id="logo-button"
        >
          <v-icon color="black" size="35" width="0">
            {{ logoIcon }}
          </v-icon>

          <v-subheader>{{ logoHeaderTitle }}</v-subheader>
        </v-btn>
      </div>
      <!-- linker  -->
      <v-btn-toggle v-model="toggle_btn" group>
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.path"
          :ripple="false"
          class="mt-10"
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
      <v-btn elevation="0" id="no-background-hover" :ripple="false" href="/">
        <v-icon color="black" size="32" class="mr-0">{{ logoIcon }}</v-icon>

        <v-subheader> {{ logoHeaderTitle }} </v-subheader>
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
#no-background-hover::before {
  background-color: transparent !important;
}
#logo-button {
  background-color: transparent !important;
}
#logo-button::before {
  background-color: transparent !important;
}
</style>
