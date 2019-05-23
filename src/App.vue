<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Ice Cream Inventory</h1>
      <h2 class="subtitle">A totally necessary app for your cold desserts.</h2>
      <div class="columns">
        <div class="column">
          <ice-cream-form @add:icecream="addIceCream"/>
        </div>
        <div class="column">
          <b-message title="Space for..." size="is-large" type="is-info">a pie chart?</b-message>
        </div>
      </div>
      <ice-cream-table :icecreams="icecreams"/>
    </div>
  </section>
</template>

<script>
import IceCreamTable from "@/components/IceCreamTable.vue";
import IceCreamForm from "@/components/IceCreamForm.vue";

export default {
  name: "app",
  components: {
    IceCreamTable,
    IceCreamForm
  },
  data() {
    return {
      icecreams: [
        {
          id: 1,
          flavor: "Nougat",
          label: "Pingviini",
          date: "2019-5-22 00:00:00",
          qty: 1
        },
        {
          id: 2,
          flavor: "Tiikeri",
          label: "Pingviini",
          date: "2019-5-14 00:00:00",
          qty: 0.5
        }
      ]
    };
  },
  methods: {
    addIceCream(icecream) {
      const lastId =
        this.icecreams.length > 0
          ? this.icecreams[this.icecreams.length - 1].id
          : 0;
      const id = lastId + 1;
      const newIceCream = { ...icecream, id };
      this.icecreams = [...this.icecreams, newIceCream];
    }
  }
};
</script>

<style>
.columns {
  margin-top: 2rem;
}
</style>
