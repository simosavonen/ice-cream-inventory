<template>
  <div id="ice-cream-form">
    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label">Flavor name</label>
        <div class="control">
          <input v-model="icecream.flavor" class="input" type="text" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Label name</label>
        <div class="control">
          <input v-model="icecream.label" class="input" type="text" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Quantity (L)</label>
        <div class="control">
          <input v-model="icecream.qty" class="input" type="number" step="0.1" required>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="field">
          <label class="label">Color</label>
          <div class="control">
            <swatches v-model="icecream.color" :colors="colors">
              <input
                slot="trigger"
                :value="icecream.color"
                class="form__input__element input"
                readonly
              >
            </swatches>
          </div>
        </div>

        <div class="field is-expanded">
          <label class="label">Preview</label>
          <div class="control">
            <input
              class="input is-rounded"
              v-bind:style="{ backgroundColor: icecream.color}"
              readonly
            >
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-info is-outlined">Add Ice Cream</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swatches from "vue-swatches";
export default {
  name: "ice-cream-form",
  components: { Swatches },
  data() {
    return {
      icecream: {
        flavor: "",
        label: "",
        date: new Date().toISOString(),
        qty: "1.0",
        color: "#000000"
      },
      colors: [
        "#F0B684",
        "#F49E00",
        "#6E2904",
        "#991626",
        "#222222",
        "#A10456",
        "#DB1419",
        "#00905D",
        "#BF5927",
        "#E74E10",
        "#F7EEDD"
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:icecream", this.icecream);
      this.icecream.flavor = "";
      this.icecream.label = "";
      this.icecream.qty = "1.0";
      this.icecream.color = "#000000";
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>