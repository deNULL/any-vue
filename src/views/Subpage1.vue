<template>
  <div>
    <a-nav-bar>
      <template v-slot:title>
        111
      </template>
    </a-nav-bar>
    <a-template name="title">
      That's a subpage
    </a-template>
    <a-list :value="[{ header: 'This is a child view', group: [
        { title: 'Push even deeper', kind: 'primary', onclick: pushChild },
        { title: 'Push view with tabs', kind: 'primary', onclick: pushTabs },
        { title: 'Pop back', kind: 'destructive', onclick: () => $anyvue.pop() },
      ] } ]"/>
  </div>
</template>
<script>
import Subpage1 from '../views/Subpage1.vue'
import Subtabs from '../views/Subtabs.vue'

export default {
  methods: {
    pushChild() {
      this.$anyvue.push(Subpage1);
    },
    pushTabs() {
      this.$anyvue.push(Subtabs);
    }
  }
}
</script>