<template>
  <v-footer padless>
    <v-card class="flex secondary" flat tile>
      <v-card-text class="py-2 text-center">
        <v-btn v-for="icon in icons" :key="icon" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <strong>Stay in touch on our Social Media!</strong>
      </v-card-text>

      <v-card-text class="py-3 text-center">
        <strong>Tom-Håkon Fjeldheim</strong>
        <v-spacer></v-spacer> {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
