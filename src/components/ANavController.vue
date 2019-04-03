<template>
  <div
    class="a-nav-controller"
    :class="classList">
    <a-nav-bar class="a-nav-controller__bar" v-model="pages">
      <template v-for="(view, index) in views" v-slot:[`title${index}`]>
        <!--a-template-renderer name="title"/-->
        {{ index }}
      </template>
      <div class="a-nav-controller__header"><slot name="header"/></div>
    </a-nav-bar>

    <!-- only views that do not hide tabbar go here -->
    <div class="a-nav-controller__body">
      <div class="a-nav-controller__stack">
        <div
          class="a-nav-controller__view"
          v-for="(view, index) in views"
          :class="viewClassList(view, index)"
          @transitionend="viewTransitionEnd(view, index)">
          <slot v-if="!view"></slot>
          <component :is="view.view" :ref="`view${index}`" v-else></component>
        </div>
      </div>

      <!-- this is to render tabbar content -->
      <slot name="footer"></slot>
    </div>

    <!-- starting with a view that hides tabbar, they go here (same horizontal stack, but no tabbar below) -->
    <div class="a-nav-controller__stack is-fullsized">
      <div
        class="a-nav-controller__view"
        v-for="(view, index) in views"
        :class="viewClassList(view, index)"
        @transitionend="viewTransitionEnd(view, index)">
        <slot v-if="!view"></slot>
        <component :is="view.view" :ref="`view${index}`" v-else></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ANavController',
  props: {
  },
  data() {
    return {
      views: [false],
      activeView: 0,
    }
  },
  computed: {
    classList() {
      return [
      ];
    },
    pages() {
      return this.views.slice(0, this.activeView + 1).map((view) => ({

      }));
    }
  },
  methods: {
    viewClassList(view, index) {
      return [
        !view.presenting && !view.dismissing && index == this.activeView && `is-active`,
        view.presenting && `is-presenting`,
        view.dismissing && `is-dismissing`,
      ];
    },
    viewTransitionEnd(view, index) {
      if (view.dismissing) {
        this.views.splice(index, 1);
      }
    },
    push(view, transition) {
      console.log('push', view);
      let info = {
        view,
        transition,
        presenting: true
      };
      this.activeView = this.views.push(info) - 1;
      setTimeout(() => {
        this.$set(info, 'presenting', false);
      }, 0);
    },
    pop(transition) {
      console.log('pop');
      this.$set(this.views[this.activeView], 'dismissing', true);
      this.activeView--;

      // TODO: just pop if there's no CSS transition
      // this.views.pop();
    },
    popAll(transition) {
      if (this.views.length > 2) {
        this.views.splice(1, this.views.length - 2);
      }
      this.pop(transition);
    }
  }
}
</script>