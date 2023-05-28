<template>
  <v-container>
    <v-row>
      <v-toolbar-title class="headline">{{ headerTitle }}</v-toolbar-title>
    </v-row>
    <!-- MOBILE -->
    <v-data-table
      class="d-md-none mt-10"
      :headers="dataHeaders"
      :items="dataItems"
      single-expand
      disable-sort
      :items-per-page="5"
      :expanded.sync="expanded"
      item-key="title"
      style="position: ; z-index: 0"
    >
      <!-- render av tabell -->
      <template v-slot:item="{ item, expand, isExpanded }">
        <tr @click="expand(!isExpanded)">
          <td v-for="field in Object.keys(item)" text-left width="80%">
            {{ item[field] }}
          </td>
          <!-- informasjon knapp kun for desktop -->
          <td>
            <v-btn
              left
              rounded
              plain
              :ripple="false"
              @click.stop="$refs.openDialog.itemDialog(item)"
            >
              <v-icon> mdi-information-outline </v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="body-2 pl-5 grey lighten-3 py-3">
          <span>
            "
            {{ item.age }}
          </span>
          <span class="text-lowercase">
            år gammel
            {{ item.description }}
            ved navn
          </span>
          <span>
            {{ item.title }}
            "
          </span>
        </td>
      </template>
    </v-data-table>
    <!-- DESKTOP -->
    <v-data-table
      class="d-none d-md-block mt-10"
      :headers="dataHeaders"
      :items="dataItems"
      single-expand
      :expanded.sync="expanded"
      item-key="title"
      style="position: ; z-index: 0"
    >
      <!-- render av tabell -->
      <template v-slot:item="{ item, expand, isExpanded }">
        <tr @click="expand(!isExpanded)">
          <td class="" v-for="field in Object.keys(item)">
            {{ item[field] }}
          </td>
          <!-- informasjon knapp kun for desktop -->
          <td>
            <v-btn
              left
              rounded
              plain
              :ripple="false"
              @click.stop="$refs.openDialog.itemDialog(item)"
            >
              <v-icon> mdi-information-outline </v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
      <!-- expaned items -->
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="body-2 pl-5 grey lighten-3 py-3">
          <span>
            {{ item.age }}
          </span>
          <span class="text-lowercase">
            år gammel
            {{ item.description }}
            ved navn
          </span>
          <span>
            {{ item.title }}
          </span>
        </td>
      </template>
    </v-data-table>
    <dialogBox ref="openDialog" />
  </v-container>
</template>
<script>
import dialogBox from "@/components/tableDialog.vue";
export default {
  components: {
    dialogBox,
  },
  data() {
    return {
      headerTitle: "Family pet table",
      expanded: [],
      dataHeaders: [
        {
          text: "Title",
          align: "start",

          value: "title",
        },
        { text: "Description", value: "description", sortable: false },

        { text: "Age", value: "age" },
        { text: "" },

        // plass for å ha knapp for å åpne modal
      ],
      dataItems: [
        {
          title: "Taxi",
          description: "Hund",
          age: 4,
        },
        {
          title: "Pusu",
          description: "Katt",
          age: 3,
        },
        {
          title: "Nusse",
          description: "Kanin",
          age: 2,
        },
        {
          title: "Snø",
          description: "Kanin",
          age: 2,
        },
        {
          title: "Fluffy",
          description: "Kanin",
          age: 2,
        },
      ],
    };
  },
};
</script>
