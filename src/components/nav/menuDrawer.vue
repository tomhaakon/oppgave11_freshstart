<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
    width="100%"
    height="auto"
    temporary
  >
    <v-list nav>
      <v-icon color="black" size="32" class="mr-4 mb-2">{{ logoIcon }}</v-icon>
      {{ logoHeaderTitle }}
      <v-list-item-group>
        <v-list-item v-for="(link, index) in linkData" :to="link.path">
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
    openDrawerForMobile(dataFromParent, logoIcon, logoHeaderTitle) {
      this.drawer = true;
      this.linkData = dataFromParent;
      this.logoIcon = logoIcon;
      this.logoHeaderTitle = logoHeaderTitle;
    },
  },
};
</script>
