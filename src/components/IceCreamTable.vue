<template>
  <b-table :data="icecreams">
    <template slot-scope="props">
      <b-table-column field="color" width="50">
        <div class="tag" v-bind:style="{ backgroundColor: props.row.color }"></div>
      </b-table-column>

      <b-table-column field="flavor" label="Flavor">{{ props.row.flavor }}</b-table-column>

      <b-table-column field="label" label="Label">{{ props.row.label }}</b-table-column>

      <b-table-column field="date" label="Purchased" centered>
        {{ new Date(props.row.date)
        .toLocaleDateString("fi-FI", { timeZone: "Europe/Helsinki"}) }}
      </b-table-column>

      <b-table-column field="qty" label="Quantity" numeric centered>{{ props.row.qty }}</b-table-column>

      <b-table-column label="Actions" width="190">
        <button class="button is-outlined" @click="$emit('editing:icecream', props.row)">edit</button>
        <button
          class="button is-outlined is-danger"
          @click="$emit('remove:icecream', props.row.id)"
        >remove</button>
      </b-table-column>
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

<style scoped>
.button {
  margin-right: 1em;
}
.tag {
  min-width: 40px;
}
</style>