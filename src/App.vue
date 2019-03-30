<template>
  <any-vue id="app">
    <h3>a-button:</h3>
    <a-button size="small" kind="commerce">Принять</a-button><br/><br/>
    <a-button kind="commerce" disabled>Принять</a-button><br/><br/>
    <a-button size="large" kind="commerce">Принять</a-button><br/><br/>
    <h3>a-spinner:</h3>
    <a-spinner/><br/><br/>
    <a-spinner size="small"/><br/><br/>
    <h3>a-switch:</h3>
    <a-switch v-model="switchState" value-on="A" value-off="B"/><br/><br/>
    <h3>a-checkbox:</h3>
    <a-checkbox v-model="checkState" :value-on="true" disabled>Some label</a-checkbox><br/><br/>
    <a-checkbox v-model="checkState" :value-on="true">Some label</a-checkbox>
    <br/><br/>
    <h3>a-list:</h3>
    <a-list v-model="listItems">
      <!--template v-slot:normal="item">
        233
      </template-->
    </a-list>
  </any-vue>
</template>

<script>
export default {
  data() {
    return {
      switchState: false,
      checkState: true,
      listItems: [
        'Item 1',
        'Item 2',
        { clickable: true, title: 'Test' },
        [ 1, 2, 3, {
          title: 'Item with a switch',
          accessory: 'switch',
          value: true,
        } ],
        { header: 'Group header', footer: 'Some footer text', group: ['A', 'B']}
      ]
    }
  }
}
</script>

<style>

</style>