<template>
  <div
    class="a-switch"
    :class="classList"
    @click="!disabled && toggle()">
    <div class="a-switch__knob"></div>
  </div>
</template>

<script>
export default {
  name: 'ASwitch',
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
      ];
    },
    isOn() {
      return this.value == this.valueOn;
    }
  },
  methods: {
    toggle() {
      this.$emit('input', this.isOn ? this.valueOff : this.valueOn);
    }
  }
}
</script>