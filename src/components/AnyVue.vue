<template>
  <div
    class="any-vue"
    :class="classList">
    <div
      class="any-vue__stack"
      v-for="(stack, stackIndex) in stacks"
      v-if="stackIndex == activeStack"
      :class="stackIndex == activeStack ? 'is-active' : ''">
      <div
        class="any-vue__view"
        v-for="(view, index) in stack.views"
        :class="viewClassList(view, stack, index, stackIndex)"
        @transitionend="viewTransitionEnd(view, stack, index, stackIndex)">
        <slot :name="tabs && tabs.length > 1 ? 'tab' + stackIndex : 'default'" v-if="!view"></slot>
        <component :is="view.view" v-else></component>
      </div>
    </div>
    <div class="any-vue__header"></div>
    <div class="any-vue__footer">
      <a-tab-bar
        v-if="tabs"
        location="footer"
        :tabs="tabs"
        v-model="activeStack"/>
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
  },
  data() {
    return {
      stacks: (this.tabs || [0]).map(() => ({
        activeView: 0,
        views: [false]
      })),
      activeStack: 0,
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
    viewClassList(view, stack, index, stackIndex) {
      return [
        !view.presenting && !view.dismissing && index == stack.activeView && `is-active`,
        view.presenting && `is-presenting`,
        view.dismissing && `is-dismissing`,
      ];
    },
    viewTransitionEnd(view, stack, index, stackIndex) {
      if (view.dismissing) {
        stack.views.splice(index, 1);
      }
    },
    setActiveStack(index, transition) {
      // TODO
      // This is same as $anyvue.activeStack = n, but with transition
    },
    push(view, transition) {
      console.log('push', view);
      let info = {
        view,
        transition,
        presenting: true
      };
      this.stacks[this.activeStack].activeView = this.stacks[this.activeStack].views.push(info) - 1;
      setTimeout(() => {
        this.$set(info, 'presenting', false);
      }, 0);
    },
    pop(transition) {
      console.log('pop');
      let stack = this.stacks[this.activeStack];
      this.$set(stack.views[stack.activeView], 'dismissing', true);
      stack.activeView--;

      // TODO: just pop if there's no CSS transition
      // stack.views.pop();
    },
    popAll(transition) {
      let stack = this.stacks[this.activeStack];
      if (stack.length > 2) {
        stack.splice(1, stack.length - 2);
      }
      this.pop(transition);
    }
  },
  created() {
    this._isAnyvueRoot = true;
  }
}
</script>