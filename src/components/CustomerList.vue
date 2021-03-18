<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Rechercher"
          single-line
          hide-details=""
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="customers"
          :items-per-page="6"
          :search="search"
          class="elevation-1"
        >
        <template v-slot:item.attachments="{ item }">
            <v-icon v-if="item.attachments" small color="teal darken-2"
              >mdi-paperclip</v-icon
            >
          </template>

          <template v-slot:item.status="{ item }">
            <v-chip :color="getColor(item.status)" dark>
              {{ item.status }}
            </v-chip>
          </template>

          <template v-slot:item.due_date="{ item }">
            {{ formatDate(item.due_date) }}
          </template>

          <template v-slot:item.interaction_creation_date="{ item }">
            {{ formatDate(item.interaction_creation_date) }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";

export default {
  name: "CustomerList",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "PJ",
          sortable: true,
          value: "attachments"
        },
        {
          text: "De",
          sortable: true,
          value: "customer.email"
        },
        {
          text: "Statut",
          sortable: true,
          value: "status"
        },
        {
          text: "Création",
          sortable: true,
          value: "due_date"
        },
        {
          text: "Dernière Interaction",
          sortable: true,
          value: "interaction_creation_date"
        },
        {
          text: "Assigné",
          sortable: true,
          value: "assignedTO"
        },
        {
          text: "Dernier commentaire",
          sortable: true,
          value: "last_comment"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      customers: state => state.customer.customers
    })
  },
  mounted() {
    this.getCustomerData();
  },
  methods: {
    ...mapActions(["getCustomerData"]),
    getColor(status) {
      if (status === "waiting") return "red";
      else if (status === "inProgress") return "orange";
      else if (status === "reserved") return "purple";
      else if (status === "finished") return "green";
      else return "#444";
    },
    formatDate(value) {
      return moment(value).format("DD/MM/YYYY HH:mm");
    }
  }
};
</script>
