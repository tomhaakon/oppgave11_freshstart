<template>
  <v-dialog v-model="dialogBox" app width="50vh">
    <v-card>
      <v-card-title>{{ itemData.title }}</v-card-title>
      <v-card-text>
        <span> " {{ itemData.description }} </span>
        <span class="text-lowercase">
          som er
          {{ itemData.age }}
          år gammel ved navn
        </span>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialogBox: false,
    itemData: {},
  }),
  methods: {
    itemDialog(dataFromParent) {
      this.dialogBox = true;
      this.itemData = dataFromParent;
    },
  },
};
</script>
