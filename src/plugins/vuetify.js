import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#607d8b",
        secondary: "#ff5722",
        accent: "#009688",
        error: "#f44336",
        warning: "#ff9800",
        info: "#00bcd4",
        success: "#8bc34a",
      },
    },
  },
});
