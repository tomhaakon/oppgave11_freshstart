<template>
  <v-navigation-drawer v-model="drawer" absolute width="100%" height="auto">
    <v-list nav>
      <v-list-item-group>
        <v-list-item v-for="(link, index) in linkData">
          <v-list-item-title>{{ link.title }}</v-list-item-title>
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
