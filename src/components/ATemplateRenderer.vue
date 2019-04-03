<script>
export default {
  name: 'ATemplateRenderer',
  props: {
    name: String,
  },
  render(createElement) {
    return createElement('div', this.$anyvue.getTemplate(this.name));
  }
}
</script>