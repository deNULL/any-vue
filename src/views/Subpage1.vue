<template>
  <a-view :title="title">
    <a-template name="title">
      That's a subpage
    </a-template>
    <a-list :value="[{ header: 'This is a child view', group: [
        { title: 'Push even deeper', kind: 'primary', onclick: pushChild },
        { title: 'Push deeper, and hide tabs', kind: 'primary', onclick: pushChildNoTabs },
        { title: 'Push view with tabs', kind: 'primary', onclick: pushTabs },
        { title: 'Pop back', kind: 'destructive', onclick: () => $anyvue.pop() },
      ] } ]"/>
  </a-view>
</template>
<script>
import Subpage1 from '../views/Subpage1.vue'
import Subtabs from '../views/Subtabs.vue'

export default {
  data() {
    return {
      title: 'Random ' + Math.floor(Math.random() * 100)
    }
  },
  methods: {
    pushChild() {
      this.$anyvue.push(Subpage1);
    },
    pushChildNoTabs() {
      this.$anyvue.push(Subpage1, null, true);
    },
    pushTabs() {
      this.$anyvue.push(Subtabs);
    }
  }
}
</script>