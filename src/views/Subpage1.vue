<template>
  <a-list :value="[{ header: 'This is a child view', group: [
      { title: 'Push even deeper', kind: 'primary', onclick: pushChild },
      { title: 'Pop back', kind: 'destructive', onclick: () => $anyvue.pop() },
    ] } ]"/>
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