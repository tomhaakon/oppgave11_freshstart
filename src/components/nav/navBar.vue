<template>
  <v-app-bar app prominent hide-on-scroll elevation="1">
    <!-- desktop -->
    <v-container class="d-none d-sm-flex">
      <!-- logo og overskrift for desktop -->
      <div>
        <v-btn
          :href="homeLink"
          :ripple="false"
          isActive="false"
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
      <!-- sjekk om link eller open dialog -->

      <v-btn-toggle v-model="toggle_btn" group>
        <v-btn
          v-for="link in links"
          :ripple="false"
          class="mt-10"
          :key="link.title"
          :to="link.path"
        >
          {{ link.title }}
        </v-btn>
        <v-btn class="mt-10" @click="$refs.loginRef.openLoginDialog()">
          Login
        </v-btn>
        <v-btn class="mt-10" @click="$refs.regRef.openRegDialog()">
          Register
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
      <!-- login comp -->
      <loginComp ref="loginRef" />
      <!-- reg comp  -->
      <regComp ref="regRef" />
    </v-container>
  </v-app-bar>
</template>
<script>
import mobileMenuDrawer from "@/components/nav/menuDrawer.vue";
import regComp from "@/components/user/regComp.vue";
import loginComp from "@/components/user/loginComp.vue";

export default {
  components: {
    mobileMenuDrawer,
    loginComp,
    regComp,
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
        link: true,
      },
      {
        title: "Profile",
        path: "/profile",
        link: true,
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
