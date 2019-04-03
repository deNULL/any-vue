<template>
  <div>
    <a-template name="title">
      Demo
      <!-- or -->
      <a-tab-bar :tabs="['A', 'B', 'C']" v-model="activeTab" location="header"/>
    </a-template>
    <a-template name="header">
      <a-tab-bar :tabs="['A', 'B', 'C']" v-model="activeTab" location="header" kind="secondary"/>
    </a-template>
    <a-template name="footer">
      <a-tab-bar :tabs="[1,2]" location="footer" kind="secondary"/>
    </a-template>

    <div v-if="activeTab == 0">
      Tab 1
    </div>
    <div v-if="activeTab == 1">
      Tab 2
    </div>
    <div v-if="activeTab == 2">
      Tab 3
    </div>

    <br/><br/>
    <a-button @click="$anyvue.pop()">Pop back</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>

