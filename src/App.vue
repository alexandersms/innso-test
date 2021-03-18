<template>
  <v-app>
    <v-main>
      <CustomerList />
    </v-main>
  </v-app>
</template>

<script>
import CustomerList from "@/components/CustomerList";

export default {
  name: "App",

  components: {
    CustomerList
  },
};
</script>
