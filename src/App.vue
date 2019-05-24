<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Ice Cream Inventory</h1>
      <h2 class="subtitle">A totally necessary app for your cold desserts.</h2>
      <div class="columns is-8">
        <div class="column">
          <ice-cream-form @add:icecream="addIceCream"/>
        </div>
        <div class="column is-half chart">
          <pie-chart
            :data="chartvalues()"
            :legend="false"
            :colors="colors()"
            :donut="true"
            suffix=" L"
          ></pie-chart>
        </div>
      </div>
      <ice-cream-table :icecreams="icecreams" @remove:icecream="removeIceCream"/>
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
          color: "#F0B684",
          qty: 1
        },
        {
          id: 2,
          flavor: "Tiikeri",
          label: "Pingviini",
          date: "2019-5-14 00:00:00",
          color: "#F49E00",
          qty: 0.5
        },
        {
          id: 3,
          flavor: "Suklaa",
          label: "Pingviini",
          date: "2019-5-11 00:00:00",
          color: "#6E2904",
          qty: 2.2
        }
      ]
    };
  },
  mounted() {
    if (localStorage.getItem("icecreams")) {
      try {
        this.icecreams = JSON.parse(localStorage.getItem("icecreams"));
      } catch (e) {
        localStorage.removeItem("icecreams");
      }
    }
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
      this.saveIceCreams();
    },
    removeIceCream(id) {
      this.icecreams = this.icecreams.filter(ic => ic.id !== id);
      this.saveIceCreams();
    },
    saveIceCreams() {
      const parsed = JSON.stringify(this.icecreams);
      localStorage.setItem("icecreams", parsed);
    },
    colors() {
      return this.icecreams.map(ic => {
        return ic.color;
      });
    },
    chartvalues() {
      return this.icecreams.map(ic => {
        return [ic.flavor, ic.qty];
      });
    }
  }
};
</script>

<style>
.columns {
  margin-top: 2rem;
}

.chart {
  padding-top: 2rem !important;
}
</style>
