<template>
  <button
    class="a-button"
    :class="className" 
    :disabled="disabled" 
    @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    size: {
      type: String,
      default: 'normal',
    },
    kind: {
      type: String,
      default: 'primary',
    },
    disabled: Boolean,
  },
  computed: {
    className() {
      return [
        this.size && `is-${this.size}`,
        this.kind && `is-${this.kind}`,
        this.disabled && `is-disabled`,
      ];
    }
  }
}
</script>