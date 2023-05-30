<template>
  <v-dialog v-model="loginDialog" app width="50vh">
    <v-card>
      <v-card-title>Log in</v-card-title>
      <v-card-text> </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    loginDialog: false,
    loginData: {},
  }),
  methods: {
    openLoginDialog(dataFromNavbar) {
      this.loginDialog = true;
      this.loginData = dataFromNavbar;
    },
  },
};
</script>
