<template>
  <div
    class="any-vue"
    :class="className">
    <slot></slot>
    <div class="any-vue__tabbar"></div>
    <div class="any-vue__alerts"></div>
  </div>
</template>

<script>
export default {
  name: 'AnyVue',
  props: {
    os: {
      type: String,
      default: 'ios',
    },
    base: {
      type: String,
      default: 'vk',
    },
    theme: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    className() {
      return [
        this.os && `os-${this.os}`,
        this.base && `base-${this.base}`,
        this.theme && `theme-${this.theme}`,
      ];
    }
  }
}
</script>