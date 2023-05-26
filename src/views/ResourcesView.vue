<template>
  <v-container>
    <v-data-table
      :headers="dataHeaders"
      :items="dataItems"
      single-expand
      :expanded.sync="expanded"
      item-key="title"
      show-expand
    >
      <template slot="item" slot-scope="row">
        <tr @click="expand(!isExpanded)">
          <td></td>
          <td>{{ row.item.title }}</td>
          <td>{{ row.item.link }}</td>

          <td>{{ row.item.age }}</td>
          <td>{{ row.item.description }}</td>
          <td>
            <v-btn class="" fab x-small>
              <v-icon dark>mdi-heart</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Expandable Table</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
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
        { text: "Age", value: "age" },
        { text: "Link", value: "link" },
        { text: "x", sortable: false },
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
