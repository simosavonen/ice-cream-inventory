<template>
  <b-table :data="icecreams" :columns="columns"></b-table>
</template>

<script>
export default {
  name: "ice-cream-table",
  props: {
    icecreams: Array
  },
  data() {
    return {
      columns: [
        {
          field: "flavor_name",
          label: "Flavor"
        },
        {
          field: "label_name",
          label: "Label"
        },
        {
          field: "date",
          label: "Purchased",
          centered: true
        },
        {
          field: "qty",
          label: "Quantity",
          numeric: true
        }
      ]
    };
  }
};
</script>

<style scoped></style>