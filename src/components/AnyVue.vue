<template>
  <div
    class="any-vue"
    :class="classList">
    <div v-for="view in stack">
      <div class="any-vue__header"></div>
      <slot v-if="!view"></slot>
      <component :is="view" v-else></component>
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
    push(view) {
      console.log('push', view);
      this.stack.push(view);
    },
    pop() {
      console.log('pop');
      this.stack.pop();
    }
  },
  created() {
    this._isAnyvueRoot = true;
  }
}
</script>