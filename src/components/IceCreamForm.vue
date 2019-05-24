<template>
  <div id="ice-cream-form">
    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label">Flavor name</label>
        <div class="control">
          <input v-model="icecream.flavor" class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Label name</label>
        <div class="control">
          <input v-model="icecream.label" class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Quantity (L)</label>
        <div class="control">
          <input v-model="icecream.qty" class="input" type="number" step="0.1">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="field">
          <label class="label">Color</label>
          <div class="control">
            <swatches v-model="icecream.color">
              <input
                slot="trigger"
                :value="icecream.color"
                :colors="colors"
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
        color: "#FFFFFF"
      },
      colors: ["#F0B684", "#F49E00", "#6E2904"]
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:icecream", this.icecream);
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>