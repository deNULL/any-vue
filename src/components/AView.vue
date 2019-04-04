<template>
  <div
    class="a-view"
    :class="classList">
    <div class="a-view__header">
      <a-nav-bar
        :title="title"
        :subtitle="subtitle"
        :show-back-button="!!precedingView"
        :back-label="precedingView && precedingView.title">
        <template v-slot:title><slot name="title"/></template>
        <template v-slot:subtitle><slot name="subtitle"/></template>
        <template v-slot:left><slot name="left"/></template>
        <template v-slot:center><slot name="center"/></template>
        <template v-slot:right><slot name="right"/></template>
      </a-nav-bar>
    </div>
    <div class="a-view__body">
      <slot></slot>
    </div>
    <div class="a-view__footer"></div>
  </div>
</template>

<script>
export default {
  name: 'AView',
  props: {
    title: String,
    subtitle: String,

    titleIcon: String,

    navbarKind: String,
    navbarTabs: Array,
    navbarTabsSecondary: Array,
    navbarDropdown: Array,
    navbarLeftButtons: Array,
    navbarRightButtons: Array,


    showsSearchBar: Boolean,
    primarySearchBar: Boolean,

    showsFooter: Boolean,
    footerTabs: Array,
    footerLeftButtons: Array,
    footerRightButtons: Array,
    footerTitle: String,

    defaultTransition: String,
    hidesTabbar: Boolean,

    showsBackButton: Boolean,
    backButtonLabel: String,

    showsCancelButton: Boolean,

    bigHeader: Boolean, // new iOS style
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    classList() {
      return [
      ];
    },
    precedingView() {
      return this.$anyvue.findPreceding(this);
    }
  },
  mounted() {
    this.isMounted = true;
    this._isAnyvueView = true;
  }
}
</script>