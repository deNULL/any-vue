<template>
  <div
    class="a-nav-controller"
    :class="classList">
    <div class="a-nav-controller__stack">
      <a-tab-controller 
        class="a-nav-controller__view" 
        :class="stackClassList"
        bar-location="footer" 
        :tabs="tabs"
        :value="value"
        @input="$emit('input', $event)"
        v-if="tabs">
        <template
          v-for="(stack, stackIndex) in stacks" 
          v-slot:[`tab${stackIndex}`]>
          <div class="a-nav-controller__stack">
            <div
              v-for="(view, viewIndex) in stack.compactViews"
              class="a-nav-controller__view"
              :class="viewClassList(view, viewIndex, stack, stackIndex, false)"
              @transitionend="viewTransitionEnd(view, viewIndex, stack, stackIndex, false)">
              <slot :name="tabs.length > 1 ? `tab${stackIndex}` : 'default'" v-if="viewIndex == 0"></slot>
              <component :is="view.view" v-else></component>
            </div>
          </div>
        </template>
      </a-tab-controller>

      <div
        v-for="(view, viewIndex) in fullscreenViews"
        class="a-nav-controller__view"
        :class="viewClassList(view, viewIndex, stacks[value], value, true)"
        @transitionend="viewTransitionEnd(view, viewIndex, stacks[value], value, true)">
        <slot name="default" v-if="!tabs && viewIndex == 0"></slot>
        <component :is="view.view" v-else></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ANavController',
  props: {
    tabs: Array,
    value: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return { /* Note: this makes tabs not reactive */
      stacks: (this.tabs || [false]).map(() => ({
        activeView: 0,
        compactViews: this.tabs ? [false] : [],
        fullscreenViews: this.tabs ? [] : [false],
      })),
    }
  },
  computed: {
    classList() {
      return [
      ];
    },
    stackClassList() {
      let stack = this.stacks[this.value];
      let index = stack.compactViews.length - 1;
      let view = stack.compactViews[index];

      return [
        !view.presenting && stack.activeView <= index && `is-active`,
        view.presenting && `is-presenting`,
      ];
    },
    fullscreenViews() {
      return this.stacks[this.value].fullscreenViews;
    }
  },
  methods: {
    viewClassList(view, index, stack, stackIndex, fullscreen) {
      return [
        !view.presenting && !view.dismissing && index + (fullscreen ? stack.compactViews.length : 0) == stack.activeView && `is-active`,
        view.presenting && `is-presenting`,
        view.dismissing && `is-dismissing`,
      ];
    },
    viewTransitionEnd(view, index, stack, stackIndex, fullscreen) {
      if (view.dismissing) {
        if (fullscreen) {
          stack.fullscreenViews.splice(index, 1);
        } else {
          stack.compactViews.splice(index, 1);
        }
      }
    },

    push(view, transition, hideTabbar) {
      let stack = this.stacks[this.value];
      // slice extra views
      if (this.tabs) {
        if (stack.activeView >= stack.compactViews.length) {
          stack.fullscreenViews.splice(stack.activeView - stack.compactViews.length + 1);
        } else {
          stack.compactViews.splice(stack.activeView + 1);
        }
      } else {
        stack.fullscreenViews.splice(stack.activeView + 1);
      }

      let fullscreen = hideTabbar || !this.tabs || stack.fullscreenViews.length > 0;
      let info = {
        view,
        transition,
        presenting: true
      };
      console.log('push', info);
      if (fullscreen) {
        stack.activeView = stack.compactViews.length + stack.fullscreenViews.push(info) - 1;
      } else {
        stack.activeView = stack.compactViews.push(info) - 1;
      }
      setTimeout(() => {
        this.$set(info, 'presenting', false);
      }, 0);
    },
    pop() {
      console.log('pop');
      let stack = this.stacks[this.value];
      if (!this.tabs || stack.activeView >= stack.compactViews.length) {
        this.$set(stack.fullscreenViews[stack.activeView - stack.compactViews.length], 'dismissing', true);
      } else {
        this.$set(stack.compactViews[stack.activeView], 'dismissing', true);
      }
      stack.activeView--;

      // TODO: just pop if there's no CSS transition
      // stack.views.pop();
    },
    popAll() {
      let stack = this.stacks[this.value];
      if (stack.activeView > 1) {
        if (this.tabs) {
          if (stack.activeView >= stack.compactViews.length) {
            stack.fullscreenViews.splice(0, stack.activeView - stack.compactViews.length - 1);
            stack.compactViews.splice(1, stack.compactViews.length - 1);
          } else {
            stack.compactViews.splice(1, stack.activeView - 1);
          }
        } else {
          stack.fullscreenViews.splice(1, stack.activeView - 1);
        }
      }
      this.pop();
    }
  }
}
</script>