<template>
  <div class="site">
    <section class="section site-content">
      <div class="container">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <div>
                <p class="title is-size-3-tablet is-size-4-mobile">Ice Cream Inventory</p>
                <p
                  class="title is-size-5-tablet is-size-7-mobile"
                >A most necessary app for your cold delights.</p>
              </div>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div>
                <p
                  class="title is-size-3-tablet is-size-4-mobile has-text-right"
                >{{totalAmount()}} litres</p>
                <p class="title is-size-5-tablet is-size-7-mobile has-text-right">Total amount</p>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-8">
          <div class="column">
            <ice-cream-form
              @add:icecream="addIceCream"
              @edit:icecream="editIceCream"
              @cancel:edit="cancelEdit"
              v-bind:editing="editing"
            />
          </div>
          <div class="column is-half chart">
            <pie-chart
              v-if="icecreams.length > 0"
              :data="chartvalues()"
              :legend="false"
              :colors="colors()"
              :donut="true"
              suffix=" L"
            ></pie-chart>
            <div v-else class="notification is-warning">
              <h1 class="title">The fridge is empty!</h1>
              <h2 class="subtitle">Go get some.</h2>
            </div>
          </div>
        </div>
        <ice-cream-table
          :icecreams="icecreams"
          @remove:icecream="removeIceCream"
          @editing:icecream="editingIceCream"
        />
      </div>
    </section>
    <footer class="footer">
      <div class="container has-text-centered">
        <p>Ice Cream Inventory - by Simo Savonen</p>
        <p>
          Sample app to practise
          <a href="https://vuejs.org/">Vue.js</a> with.
        </p>
        <p>Saves the entries in the browser localStorage.</p>
      </div>
    </footer>
  </div>
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
      editing: {},
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
      const newIceCream = {
        ...icecream,
        id,
        qty: parseFloat(icecream.qty),
        date: new Date().toISOString()
      };
      this.icecreams = [...this.icecreams, newIceCream];
      this.saveIceCreams();
      this.$toast.open({
        message: "Added an ice cream!",
        type: "is-success"
      });
    },
    editingIceCream(icecream) {
      this.editing = Object.assign({}, icecream);
    },
    cancelEdit() {
      this.editing = {};
    },
    editIceCream(icecream) {
      const editedIceCream = {
        ...icecream,
        qty: parseFloat(icecream.qty)
      };
      this.icecreams = this.icecreams.map(ic =>
        ic.id === editedIceCream.id ? editedIceCream : ic
      );
      this.saveIceCreams();
      this.$toast.open({
        message: "Edited an ice cream!",
        type: "is-info"
      });
      this.cancelEdit();
    },
    removeIceCream(id) {
      this.icecreams = this.icecreams.filter(ic => ic.id !== id);
      this.saveIceCreams();
      this.$toast.open({
        message: "Removed an ice cream!",
        type: "is-danger"
      });
      this.cancelEdit();
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
    },
    totalAmount() {
      return this.icecreams.reduce((sum, ic) => sum + ic.qty, 0);
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

.notification {
  padding: 3rem !important;
  border-radius: 25px !important;
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex: 1;
}
</style>
