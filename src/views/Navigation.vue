<template>
  <any-vue>
    <a-list :value="[[
      { title: 'Push child view', clickable: true, kind: 'primary', onclick: pushChild },
    ]]"/>
  </any-vue>
</template>
<script>
import Subpage1 from '../views/Subpage1.vue'

export default {
  methods: {
    pushChild() {
      this.$anyvue.push(Subpage1);
    }
  }
}
</script>