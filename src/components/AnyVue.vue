<template>
  <div
    class="any-vue"
    :class="classList">
    <div
      class="any-vue__view"
      v-for="(view, index) in stack"
      :class="viewClassList(view, index)"
      @transitionend="viewTransitionEnd(view, index)">
      <div class="any-vue__header"></div>
      <div class="any-vue__content">
        <slot v-if="!view"></slot>
        <component :is="view.view" v-else></component>
      </div>
      <div class="any-vue__footer"></div>
    </div>
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

three ways a view can be presented:
- pushed onto a stack as usual (adds back button to navbar by default);
  default transition = left-right

- pushed onto a stack as modal (adds cancel/confirm buttons to navbar);
  default transition = up-down
  also flip, dissolve, curl, none

- swap existing view(s) entirely (for tab bars);
  default transition = none
  also left-right
  (or maybe keep second-level array of views optionally)


any-vue view controller should be able to configure:
- navbar title/subtitle/controls (usually are: left buttons, right buttons, tabbar, secondary tabbar, dropdown)
- footer tabbar/secondary tabbar/custom controls
- should add back button to navbar or not
- should hide parent tabbar or not
- fab?
- default presenting transition?

allow control whether all views in stack should be kept alive (they are now)
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
  },
  data() {
    return {
      stack: [false],
      activeIndex: 0,
    }
  },
  computed: {
    classList() {
      return [
        this.os && `os-${this.os}`,
        this.base && `base-${this.base}`,
        this.theme && `theme-${this.theme}`,
      ];
    }
  },
  methods: {
    viewClassList(view, index) {
      return [
        !view.presenting && !view.dismissing && index == this.activeIndex && `is-active`,
        view.presenting && `is-presenting`,
        view.dismissing && `is-dismissing`,
      ];
    },
    viewTransitionEnd(view, index) {
      if (view.dismissing) {
        this.stack.splice(index, 1);
      }
    },
    push(view, transition) {
      console.log('push', view);
      let info = {
        view,
        transition,
        presenting: true
      };
      this.activeIndex = this.stack.push(info) - 1;
      setTimeout(() => {
        this.$set(info, 'presenting', false);
      }, 0);
    },
    pop() {
      console.log('pop');
      this.$set(this.stack[this.activeIndex], 'dismissing', true);
      this.activeIndex = this.activeIndex - 1;

      // TODO: just pop if there's no CSS transition
      //this.stack.pop();
    }
  },
  created() {
    this._isAnyvueRoot = true;
  }
}
</script>