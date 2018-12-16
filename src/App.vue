<template>
  <any-vue id="app">
    <a-button size="small" kind="commerce">Принять</a-button><br/><br/>
    <a-button kind="commerce" disabled>Принять</a-button><br/><br/>
    <a-button size="large" kind="commerce">Принять</a-button><br/><br/>
    <a-spinner/><br/><br/>
    <a-spinner size="small"/><br/><br/>
    <a-switch v-model="switchState" value-on="A" value-off="B"/><br/><br/>
    <a-checkbox v-model="checkState" :value-on="true">Some label</a-checkbox>
  </any-vue>
</template>

<script>
export default {
  data() {
    return {
      switchState: false,
      checkState: 0
    }
  }
}
</script>

<style>

</style>