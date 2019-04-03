<template>
  <div
    class="a-nav-bar"
    :class="classList">
    <div v-for="(page, index) in value.length < oldValue.length ? oldValue : value"  class="a-nav-bar__page" :class="pageClassList(page, index)" @transitionend="pageTransitionEnd(page, index)">
      <slot :name="`title${index}`">
        Title
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ANavBar',
  props: {
    value: Array,
  },
  data() {
    return {
      oldValue: this.value.slice(0),
      anim: false,
    }
  },
  watch: {
    value(value, oldValue) {
      this.$nextTick(() => {
        this.anim = true;
      });
    }
  },
  computed: {
    classList() {
      return [
      ];
    }
  },
  methods: {
    pageClassList(page, index) {
      return [
        index == (this.anim ? this.value : this.oldValue).length - 1 && `is-active`,
        this.anim && index == this.value.length - 1 && index != this.oldValue.length - 1 && `is-presenting`,
        this.anim && index == this.oldValue.length - 1 && index != this.value.length - 1 && `is-dismissing`,
        this.anim && index == this.oldValue.length - 1 && this.value.length < this.oldValue.length && `is-popping`,
        !this.anim && index == this.value.length - 1 && this.value.length > this.oldValue.length && `is-pushing`,
      ];
    },
    pageTransitionEnd(page, index) {
      this.oldValue = this.value;
      this.anim = false;
    }
  }
}
</script>