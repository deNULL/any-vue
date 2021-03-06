<template>
  <div
    class="any-vue"
    :class="classList">
    <a-nav-controller
      :tabs="tabs" 
      :transition-duration="transitionDuration" 
      v-model="activeTab" 
      ref="navController">
      <!-- pass down tab templates -->
      <template v-for="(tab, index) in (tabs || [false])" v-slot:[tabs?`tab${index}`:`default`]>
        <slot :name="tabs ? `tab${index}` : `default`"></slot>
      </template>
    </a-nav-controller>
    <div class="any-vue__alerts"></div>
  </div>
</template>

<script>
/*
navigation thoughts
- via vue-router
  pros:
    concepts are mostly the same
  cons:
    unable to have multiple any-vue roots on same page (useful for docs)
    structure is too rigid, has to be laid out in router beforehand
- via own api
  pros:
    more fine-tuned methods
  cons:
    harder to implement, concepts require learning

four ways a view can be presented:
- pushed onto a stack as usual (adds back button to navbar by default);
  default transition = left-right

- pushed onto a stack as modal (adds cancel/confirm buttons to navbar);
  default transition = up-down
  also flip, dissolve, curl, none

- swap current stack entirely (for tab bars);
  default transition = none
  also left-right
  should be a top-level array of stacks

- as an alert/prompt/action sheet
  similar to pt.2, but with different styling (partial screen cover, no header/footer, action buttons)


any-vue view controller should be able to configure:
- navbar title/subtitle/controls (usually are: left buttons, right buttons, tabbar, secondary tabbar, dropdown)
- footer tabbar/secondary tabbar/custom controls
- should add back button to navbar or not
- should hide parent tabbar or not
- fab?
- default presenting transition?

allow control whether all views in stack should be kept alive (they are now)

for navbar/header/tabbar/footer configuration allow passing template string from component and do something similar to what v-runtime-template does (but allow access not to parent component, but to the component navbar/tabbar was defined in)

left/right offscreen panels (global, so they can be implemented just as slots)
*/

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

    tabs: Array,
    transitionDuration: {
      type: Number,
      default: 300,
    }
  },
  data() {
    return {
      activeTab: 0,
      isMounted: false,
    }
  },
  computed: {
    classList() {
      return [
        this.os && `os-${this.os}`,
        this.base && `base-${this.base}`,
        this.theme && `theme-${this.theme}`,
      ];
    },
    previousView() {
      this.isMounted;
      return this.$refs.navController && this.$refs.navController.previousComponent;
    },
    activeView() {
      this.isMounted;
      return this.$refs.navController && this.$refs.navController.activeComponent;
    },
    activeStackSize() {
      this.isMounted;
      return this.$refs.navController ? this.$refs.navController.activeStackSize : 1;
    }
  },
  methods: {
    findPreceding(view) {
      return this.$refs.navController && this.$refs.navController.findPreceding(view);
    },
    push(view, transition, hideTabbar) {
      this.$refs.navController.push(view, transition, hideTabbar);
    },
    pop() {
      this.$refs.navController.pop();
    },
    popAll() {
      this.$refs.navController.popAll();
    }
  },
  beforeCreate() {
    this._isAnyvueRoot = true;
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>