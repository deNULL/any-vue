<script>
export default {
  name: 'ATemplate',
  props: {
    name: String,
  },
  render(createElement) {
    return null;
  },
  created() {
    if (this.name in this.$parent.$templates) {
      throw new Error(`Template with name "${this.name}" is already defined on parent view`);
    } else {
      this.$parent.$templates[this.name] = this.$slots.default;
    }
  }
}
</script>