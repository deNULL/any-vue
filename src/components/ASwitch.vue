<template>
  <div
    class="a-switch"
    :class="className"
    @click="!disabled && toggle()">
    <div class="a-switch__knob"></div>
  </div>
</template>

<script>
export default {
  name: 'ASwitch',
  props: {
    value: Boolean,
    disabled: Boolean,
  },
  computed: {
    className() {
      return [
        this.value ? `is-on` : 'is-off',
        this.disabled && `is-disabled`,
      ];
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }
  }
}
</script>