<template>
  <div
    class="a-tab-controller"
    :class="classList">

    <a-tab-bar
      class="a-tab-controller__bar" 
      v-if="barLocation == 'header' || barLocation == 'normal'"
      :location="barLocation" 
      :tabs="tabs" 
      :value="value"
      @input="$emit('input', $event)"></a-tab-bar>

    <div class="a-tab-controller__stack">
      <div
        class="a-tab-controller__view"
        v-for="(tab, index) in tabs"
        :class="viewClassList(views[index], index)">
        <slot :name="`tab${index}`"></slot>
      </div>
    </div>
    
    <a-tab-bar 
      class="a-tab-controller__bar" 
      location="footer" 
      v-if="barLocation == 'footer'" 
      :tabs="tabs" 
      :value="value"
      @input="$emit('input', $event)"></a-tab-bar>
  </div>
</template>

<script>
export default {
  name: 'ATabController',
  props: {
    tabs: Array,
    value: Number,
    barLocation: {
      type: String,
      default: 'header',
    }
  },
  data() {
    return {
      views: (this.tabs || [0]).map(() => ({
        presenting: false,
        dismissing: false,
      }))
    }
  },
  computed: {
    classList() {
      return [
      ];
    }
  },
  methods: {
    viewClassList(view, index) {
      return [
        !view.presenting && !view.dismissing && index == this.value && `is-active`,
        index < this.value && `is-before-active`,
        index > this.value && `is-after-active`,
        view.presenting && `is-presenting`,
        view.dismissing && `is-dismissing`,
      ];
    },
  }
}
</script>