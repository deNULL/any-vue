<template>
  <div
    class="a-spinner"
    :class="className">
  </div>
</template>

<script>
export default {
  name: 'ASpinner',
  props: {
    size: {
      type: String,
      default: 'normal',
    }
  },
  computed: {
    className() {
      return [
        this.size && `is-${this.size}`
      ];
    }
  }
}
</script>