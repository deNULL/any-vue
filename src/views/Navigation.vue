<template>
  <any-vue :tabs="[1, 2, 3]">

    <template v-slot:tab0>
      <a-list :value="[[
        { title: 'Push child view', clickable: true, kind: 'primary', onclick: pushChild },
      ]]"/>
    </template>
    <template v-slot:tab1>
      Second tab content
    </template>
    <template v-slot:tab2>
      <a-list :value="[[
        { title: 'Just a list with some items', label: 'Description label' },
      ]]"/>
    </template>
  </any-vue>
</template>
<script>
import Subpage1 from '../views/Subpage1.vue'

export default {
  methods: {
    pushChild() {
      console.log('click', this.$anyvue);
      this.$anyvue.push(Subpage1);
    }
  }
}
</script>