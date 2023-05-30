<template>
  <v-dialog v-model="regDialog" app width="50vh">
    <v-card>
      <v-card-title>Log in</v-card-title>
      <v-card-text> </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    regDialog: false,
    regData: {},
  }),
  methods: {
    openRegDialog(dataFromNavbar) {
      this.regDialog = true;
      this.regData = dataFromNavbar;
    },
  },
};
</script>
