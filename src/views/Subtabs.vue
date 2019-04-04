<template>
  <a-view>
    <template v-slot:title>
      <!--Demo-->
      <!-- or -->
      <a-tab-bar :tabs="['A', 'B', 'C']" v-model="activeTab" location="header"/>
    </template>
    <template v-slot:header>
      <a-tab-bar :tabs="['A', 'B', 'C']" v-model="activeTab" location="header" kind="secondary"/>
    </template>
    <template v-slot:footer>
      <a-tab-bar :tabs="[1,2]" location="footer" kind="secondary"/>
    </template>

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
  </a-view>
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

