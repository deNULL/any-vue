<template>
  <label
    class="a-checkbox"
    :class="classList">
    <input
      type="checkbox"
      class="a-checkbox__input"
      ref="input"
      :checked="value === valueOn"
      :disabled="disabled"
      @input="$emit('input', value ? valueOff : valueOn)"/>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'ACheckbox',
  props: {
    value: null,
    valueOn: {
      default: true,
    },
    valueOff: {
      default: false,
    },
    disabled: Boolean,
  },
  computed: {
    classList() {
      return [
        this.isOn ? `is-on` : 'is-off',
        this.disabled && `is-disabled`,
        this.indeterminate && `is-indeterminate`,
      ];
    },
    isOn() {
      return this.value === this.valueOn;
    },
    indeterminate() {
      let indeterminate = (this.value !== this.valueOn) && (this.value !== this.valueOff);
      if (this.$refs.input) {
        this.$refs.input.indeterminate = indeterminate;
      }
      return indeterminate;
    }
  },
  mounted() {
    this.$refs.input.indeterminate = this.indeterminate;
  }
}
</script>