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
        <label class="label">Quantity</label>
        <div class="control">
          <input v-model="icecream.qty" class="input" type="number">
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
export default {
  name: "ice-cream-form",
  data() {
    return {
      icecream: {
        flavor: "",
        label: "",
        date: new Date().toISOString(),
        qty: 0
      }
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