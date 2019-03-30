<template>
  <div
    class="a-tab-bar"
    :class="classList">
    <div
      v-for="(tab, index) in tabs"
      class="a-tab-bar__tab"
      :class="index == value ? 'is-active' : ''"
      @click="selectTab(index)"
    >
      {{ tab.title || tab }}
    </div>
  </div>
</template>

<script>
/* kinds: 'primary', 'secondary'
location: 'normal', 'header', 'footer'
*/

export default {
  name: 'ATabBar',
  props: {
    kind: {
      type: String,
      default: 'primary',
    },
    location: {
      type: String,
      default: 'normal',
    },
    tabs: Array,
    value: Number,
    disabled: Boolean,
  },
  computed: {
    classList() {
      return [
        this.kind && `is-${this.kind}`,
        this.location && `is-${this.location}`,
        this.disabled && `is-disabled`,
      ];
    }
  },
  methods: {
    selectTab(index) {
      this.$emit('input', index);
    }
  }
}
</script>