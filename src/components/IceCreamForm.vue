<template>
  <div id="ice-cream-form">
    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label">Flavor name</label>
        <div class="control">
          <input
            v-model="icecream.flavor"
            class="input"
            type="text"
            name="flavor"
            pattern=".{3,30}"
            v-bind:class="{'is-success' : icecream.flavor.length > 2}"
            title="Flavor length between 3 and 30 characters."
            required
          >
        </div>
      </div>

      <div class="field">
        <label class="label">Label name</label>
        <div class="control">
          <input
            v-model="icecream.label"
            class="input"
            type="text"
            name="label"
            pattern=".{3,30}"
            v-bind:class="{'is-success' : icecream.label.length > 2}"
            title="Label length between 3 and 30 characters."
            required
          >
        </div>
      </div>

      <div class="field">
        <label class="label">Quantity (L)</label>
        <div class="control">
          <input
            v-model="icecream.qty"
            class="input"
            type="number"
            min="0"
            step="0.1"
            required
            v-bind:class="{'is-success' : icecream.qty > 0}"
          >
        </div>
      </div>

      <div class="field is-grouped">
        <div class="field is-expanded">
          <label class="label">Color</label>
          <div class="control">
            <swatches v-model="icecream.color" :colors="colors">
              <input
                slot="trigger"
                type="text"
                name="color"
                :value="icecream.color"
                class="form__input__element input validitychecked"
                placeholder="pick a color"
                pattern="^#?([a-fA-F0-9]{6})$"
                title="Six digit hexadecimal color code, starting with #"
                required
              >
            </swatches>
          </div>
        </div>

        <div class="field">
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
        <div v-if="Object.keys(editing).length === 0" class="control">
          <button class="button is-info is-outlined">Add Ice Cream</button>
        </div>
        <div v-else class="buttons">
          <button class="button is-info is-outlined" @click.prevent="handleSave">Save</button>
          <button class="button is-danger is-outlined" @click.prevent="handleCancel">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
export default {
  name: "ice-cream-form",
  components: { Swatches },
  props: { editing: Object },
  watch: {
    editing: function(newVal) {
      if (Object.keys(newVal).length > 0) {
        this.icecream = Object.assign({}, newVal);
      } else {
        this.resetForm();
      }
    }
  },
  data() {
    return {
      icecream: {
        flavor: "",
        label: "",
        date: "",
        qty: 1,
        color: ""
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
      this.resetForm();
    },
    handleCancel() {
      this.$emit("cancel:edit");
      this.resetForm();
    },
    handleSave() {
      this.$emit("edit:icecream", Object.assign({}, this.icecream));
      this.resetForm();
    },
    resetForm() {
      this.icecream.flavor = "";
      this.icecream.label = "";
      this.icecream.date = "";
      this.icecream.qty = 1;
      this.icecream.color = "";
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

.validitychecked:valid {
  border-color: #23d160;
}
</style>