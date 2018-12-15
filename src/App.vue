<template>
  <any-vue id="app">
    <a-button size="small" kind="commerce">Принять</a-button><br/><br/>
    <a-button kind="commerce" disabled>Принять</a-button><br/><br/>
    <a-button size="large" kind="commerce">Принять</a-button><br/><br/>
    <a-spinner/><br/><br/>
    <a-spinner size="small"/><br/><br/>
    <a-switch v-model="switchState"/>
  </any-vue>
</template>

<script>
export default {
  data() {
    return {
      switchState: false
    }
  }
}
</script>

<style>

</style>