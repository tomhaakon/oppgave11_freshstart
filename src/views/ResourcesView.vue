<template>
  <v-container
    ><v-row>
      <v-toolbar-title class="ma-2 mb-10 headline"
        >Expandable table</v-toolbar-title
      >
    </v-row>
    <v-data-table
      :headers="dataHeaders"
      :items="dataItems"
      single-expand
      :expanded.sync="expanded"
      item-key="title"
    >
      <template v-slot:item="{ item, expand, isExpanded }">
        <tr @click="expand(!isExpanded)">
          <td
            class="d-block d-sm-table-cell"
            v-for="field in Object.keys(item)"
          >
            {{ item[field] }}
          </td>
          <td><v-btn plain rounded>x</v-btn></td>
        </tr>
      </template>

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
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      expanded: [],
      dataHeaders: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "Description", value: "description" },
        { text: "Link", value: "link" },
        { text: "Age", value: "age" },
        { text: "", sortable: false }, // plass for å ha knapp for å åpne modal
      ],
      dataItems: [
        {
          title: "Taxi",
          description: "Hund",
          link: "taxi-hund.com",
          age: 4,
        },
        {
          title: "Pusu",
          description: "Katt",
          link: "pusu-katten.com",
          age: 3,
        },
        {
          title: "Nusse",
          description: "Kanin",
          link: "nusse-kanin.com",
          age: 2,
        },
        {
          title: "Snø",
          description: "Kanin",
          link: "snø-kanin.com",
          age: 2,
        },
        {
          title: "Fluffy",
          description: "Kanin",
          link: "fluffy.org",
          age: 2,
        },
      ],
    };
  },
};
</script>
