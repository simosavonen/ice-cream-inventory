<template>
  <b-table :data="icecreams" :mobile-cards="false">
    <template slot-scope="props">
      <b-table-column field="flavor" label="Flavor">{{ props.row.flavor }}</b-table-column>

      <b-table-column field="label" label="Label">{{ props.row.label }}</b-table-column>

      <b-table-column field="date" label="Purchased">
        {{ new Date(props.row.date)
        .toLocaleDateString("fi-FI", { timeZone: "Europe/Helsinki"}) }}
      </b-table-column>

      <b-table-column field="qty" label="Quantity" numeric>{{ props.row.qty }}</b-table-column>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "ice-cream-table",
  props: {
    icecreams: Array
  }
};
</script>

<style scoped></style>