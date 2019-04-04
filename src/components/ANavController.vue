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
              :style="{ '--nav-progress': view.animProgress }"
              @transitionend="viewTransitionEnd(view, viewIndex, stack, stackIndex, false)"
              :ref="`stack${stackIndex}-view${viewIndex}`">
              <slot 
                :name="tabs.length > 1 ? `tab${stackIndex}` : 'default'" 
                v-if="viewIndex == 0"></slot>
              <component
                :is="view.view"
                v-else></component>
            </div>
          </div>
        </template>
      </a-tab-controller>

      <div
        v-for="(view, viewIndex) in fullscreenViews"
        class="a-nav-controller__view"
        :class="viewClassList(view, viewIndex, stacks[value], value, true)"
        :style="{ '--nav-progress': view.animProgress }"
        @transitionend="viewTransitionEnd(view, viewIndex, stacks[value], value, true)"
        :ref="`stack${value}-view${stacks[value].compactViews.length + viewIndex}`">
        <slot
          name="default"
          v-if="!tabs && viewIndex == 0"></slot>
        <component
          :is="view.view"
          v-else></component>
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
    },
    transitionDuration: {
      type: Number,
      default: 300,
    }
  },
  data() {
    return { /* Note: this makes tabs not reactive */
      stacks: (this.tabs || [false]).map(() => ({
        activeView: 0,
        compactViews: this.tabs ? [{}] : [],
        fullscreenViews: this.tabs ? [] : [{}],
      })),
      activeAnimations: [],
    }
  },
  // states: 'presenting', 'dismissing', 'hiding', 'showing'
  computed: {
    classList() {
      return [
      ];
    },
    activeStack() {
      return this.stacks[this.value];
    },
    activeView() {
      let stack = this.activeStack;
      if (!this.tabs || stack.activeView >= stack.compactViews.length) {
        return stack.fullscreenViews[stack.activeView - stack.compactViews.length];
      } else {
        return stack.compactViews[stack.activeView];
      }
    },
    previousComponent() {
      let stack = this.activeStack;
      return this.getView(this.value, stack.activeView - 1);
    },
    activeComponent() {
      let stack = this.activeStack;
      return this.getView(this.value, stack.activeView);
    },
    activeStackSize() {
      let stack = this.activeStack;
      return stack.activeView + 1;
    },
    stackClassList() {
      let stack = this.activeStack;
      let index = stack.compactViews.length - 1;
      let view = stack.compactViews[index];

      return [
        !['hiding', 'showing'].includes(view.animState) && stack.activeView <= index && `is-active`,
        ['hiding', 'showing'].includes(view.animState) && `is-${view.animState}`,
      ];
    },
    fullscreenViews() {
      return this.activeStack.fullscreenViews;
    }
  },
  methods: {
    viewClassList(view, index, stack, stackIndex, fullscreen) {
      return [
        !view.animState && index + (fullscreen ? stack.compactViews.length : 0) == stack.activeView && `is-active`,
        view.animState && `is-${view.animState}`,
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

    findPreceding(view) {
      for (let i = 0; i < this.stacks.length; i++) {
        for (let j = 1; j < this.stacks[i].compactViews.length; j++) {
          let comp = this.getView(i, j);
          if (comp === view) {
            return this.getView(i, j - 1);
          }
        }

        for (let j = 0; j < this.stacks[i].fullscreenViews.length; j++) {
          let index = this.stacks[i].compactViews.length + j;
          let comp = this.getView(i, index);
          if (comp === view && index - 1 >= 0) {
            return this.getView(i, index - 1);
          }
        }
      }

      return null;
    },
    getView(stackIndex, viewIndex) {
      let ref = this.$refs[`stack${stackIndex}-view${viewIndex}`];
      // TODO: maybe think about better way
      if (!ref || !ref.length || !ref[0] || !ref[0].children || !ref[0].children[0] || !ref[0].children[0].__vue__) {
        return null;
      }
      let comp = ref[0].children[0].__vue__;
      if (comp._isAnyvueView) {
        return comp;
      }
      if (comp.$children.length === 1 && comp.$children[0]._isAnyvueView) {
        return comp.$children[0];
      }
      return null;
    },

    animate(view, stack, state, time) {
      let startTime = Date.now();
      let step = () => {
        let progress = (Date.now() - startTime) / time;
        if (progress >= 1) {
          this.$set(view, 'animState', false);
          this.$set(view, 'animProgress', null);
          if (state === 'dismissing') {
            let index = stack.compactViews.indexOf(view);
            if (index > -1) {
              stack.compactViews.splice(index, 1);
            } else {
              index = stack.fullscreenViews.indexOf(view);
              if (index > -1) {
                stack.fullscreenViews.splice(index, 1);
              }
            }
          }
        } else {
          this.$set(view, 'animProgress', progress);
          requestAnimationFrame(step);
        }
      }
      this.$set(view, 'animState', state);
      // Time stopping
      /*
      if (['dismissing', 'showing'].includes(state)) {
        this.$set(view, 'animProgress', 0.85);
      } else {
      */
        requestAnimationFrame(step);
      //}
    },

    push(view, transition, hideTabbar) {
      let stack = this.activeStack;

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
      };
      console.log('push', info);
      this.animate(this.activeView, stack, 'hiding', this.transitionDuration);
      this.animate(info, stack, 'presenting', this.transitionDuration);
      if (fullscreen) {
        stack.activeView = stack.compactViews.length + stack.fullscreenViews.push(info) - 1;
      } else {
        stack.activeView = stack.compactViews.push(info) - 1;
      }
    },
    pop() {
      let stack, view;
      console.log('pop');
      stack = this.activeStack;
      if (!this.tabs || stack.activeView >= stack.compactViews.length) {
        view = stack.fullscreenViews[stack.activeView - stack.compactViews.length];
      } else {
        view = stack.compactViews[stack.activeView];
      }
      this.animate(view, stack, 'dismissing', this.transitionDuration);
      stack.activeView--;
      this.animate(this.activeView, stack, 'showing', this.transitionDuration);
    },
    popAll() {
      let stack = this.activeStack;
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