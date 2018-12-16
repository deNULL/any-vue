<template>
  <div
    class="a-spinner"
    :class="classList">
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
    classList() {
      return [
        this.size && `is-${this.size}`
      ];
    }
  }
}
</script>