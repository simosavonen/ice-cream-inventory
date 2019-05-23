<template>
  <div id="app">
    <h1 class="title">Ice Creams</h1>
    <ice-cream-table :icecreams="icecreams"/>
  </div>
</template>

<script>
import IceCreamTable from "@/components/IceCreamTable.vue";

export default {
  name: "app",
  components: {
    IceCreamTable
  },
  data() {
    return {
      icecreams: [
        {
          id: 1,
          flavor_name: "Nougat",
          label_name: "Pingviini",
          date: "2019-5-22 00:00:00",
          qty: 1
        },
        {
          id: 2,
          flavor_name: "Tiikeri",
          label_name: "Pingviini",
          date: "2019-5-14 00:00:00",
          qty: 0.5
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
