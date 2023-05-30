<template>
  <v-navigation-drawer v-model="drawer" width="100%" height="auto" absolute>
    <v-list nav>
      <v-list-item-group>
        <v-list-item v-for="(link, index) in linkData" :to="link.path">
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item class="mt-10" @click="$refs.loginRef.openLoginDialog()">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item class="mt-10" @click="$refs.regRef.openRegDialog()">
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    linkData: {},
  }),
  methods: {
    openDrawerForMobile(dataFromParent) {
      this.drawer = true;
      this.linkData = dataFromParent;
    },
  },
};
</script>
