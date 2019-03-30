<template>
  <any-vue id="app">
    <h3>a-button:</h3>
    <a-button>Default</a-button><br/><br/>
    <a-button size="small" kind="secondary">is-secondary</a-button><br/><br/>
    <a-button kind="commerce" disabled>is-disabled</a-button><br/><br/>
    <a-button size="large" kind="commerce">is-large</a-button><br/><br/>
    <a-button size="large" kind="outlined">is-outlined</a-button><br/><br/>
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
      <!--template v-slot:normal="item"> // for default cells
        
      </template-->
      <!--template v-slot:custom-cell-kind="item"> // item.kind = 'custom-cell-kind'
        
      </template-->
      <!-- template v-slot:group-header="item"> // for group headers

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
        { clickable: true, title: 'Test', accessory: 'chevron', value: 'Some value' },
        { title: 'Item with a label', label: 'Label is below title in non-info rows' },
        { title: 'Item with value', value: 'Something' },
        [ 1, 2, 3, {
          title: 'Item with a switch',
          accessory: 'switch',
          value: true,
        } ],
        { header: 'Group header', footer: 'Some footer text', group: ['A', 'B']},
        { header: 'Info rows', group: [
          { label: 'Дата рождения', title: '30 января 1993', kind: 'info' },
          { label: 'Родной город', title: 'Ереван', kind: 'info' },
          { label: 'Место работы', title: 'ВКонтакте', kind: 'info' },
        ] },
        { header: 'Clickable rows', group: [
          { title: 'Do an action', kind: 'primary', clickable: true },
          { title: 'Destroy everything', kind: 'destructive', clickable: true },
        ]}
      ]
    }
  }
}
</script>

<style>

</style>