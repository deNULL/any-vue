<template>
  <div
    class="a-nav-bar"
    :class="classList">
    <div class="a-nav-bar__back-button" v-if="showBackButton" @click="$anyvue.pop()"></div>
    <div class="a-nav-bar__back-label" v-if="showBackButton && backLabel" @click="$anyvue.pop()">
      {{ backLabel }}
    </div>
    <div class="a-nav-bar__left" v-if="leftItems || $slots.left">
      <slot name="left"></slot>
    </div>
    <div class="a-nav-bar__center">
      <slot name="center">
        <div class="a-nav-bar__title" v-if="!tabs">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="a-nav-bar__subtitle" v-if="!tabs && subtitle">
          <slot name="subtitle">{{ subtitle }}</slot>
        </div>

        <a-tab-bar location="header" kind="primary" v-if="tabs"></a-tab-bar>

        <!--a-dropdown></a-dropdown-->
      </slot>
    </div>
    <div class="a-nav-bar__right" v-if="rightItems || $slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ANavBar',
  props: {
    title: String,
    subtitle: String,
    tabs: Array,

    showBackButton: Boolean,
    backLabel: String,

    leftItems: Array,
    rightItems: Array,
  },
  data() {
    return {
    }
  },
  computed: {
    classList() {
      return [
      ];
    },
  },
  methods: {
  }
}
</script>