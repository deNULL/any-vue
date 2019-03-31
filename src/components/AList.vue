<template>
  <div
    class="a-list"
    :class="classList">
    <slot
      v-for="({ item, group, groupHeader, groupFooter }, index) in items"
      :name="groupHeader !== undefined ? 'group-header' :
             groupFooter !== undefined ? 'group-footer' :
             (item && item.kind || 'normal')" v-bind:item="item">
        <div
          v-if="groupHeader !== undefined"
          class="a-list__group-header"
          :class="typeof groupHeader === 'string' ? '' : 'is-empty'">
          {{ typeof groupHeader === 'string' ? groupHeader : '' }}
        </div>
        <div
          v-else-if="groupFooter !== undefined"
          class="a-list__group-footer"
          :class="typeof groupFooter === 'string' ? '' : 'is-empty'">
          {{ typeof groupFooter === 'string' ? groupFooter : '' }}
        </div>
        <div
          v-else
          class="a-list__item"
          :class="itemClassList(item)"
          @click="itemClick($event, item, index)">

          <div class="a-list__item-content">
            {{ item.title || item }}
            <div class="a-list__item-label" v-if="item.label">{{ item.label }}</div>
          </div>
          <div class="a-list__item-value" v-if="item.accessory !== 'switch' && item.value">
            {{ item.value }}
          </div>
          <a-switch
            class="a-list__item-accessory"
            v-else-if="item.accessory === 'switch'"
            v-model="item.value"
            :value-on="'valueOn' in item ? item.valueOn : true"
            :value-off="'valueOff' in item ? item.valueOff : false"
            @input="itemInput($event, item, index)"
          ></a-switch>
          <div class="a-list__item-accessory icon-chevron" v-if="item.accessory === 'chevron'"></div>
        </div>
    </slot>
  </div>
</template>

<script>
/*

items - это строго описание данных, тут нет рендер-функций или компонентов
__как__ рендерить должно определяться другими свойствами
[
  "Only text",
  { detailed },
  [ group ], // no header/footer
  { group: [],
    header:
    footer:

    isEditing: // show delete icons
    isReordering: // show drag icons
    isSelecting: // show checkboxes
  },
]

{
  kind: 'normal', ('medium', 'large'), 'info', 'primary', 'destructive', 'any-custom-kind'
  title
  icon / image / flag
  label
  accessory: 'chevron', 'ellipsis', 'switch'
  value / badge:

  imageRadius: false, 'min', 'small', 'normal', 'large', 'max', exact value

  clickable // default = true if onclick is set or kind=primary/destructive
  selected // checked (visible only if group isSelecting)
  active // highlighted (as on tap)
  disabled 
  kind=primary  // makes text blue
  kind=destructive // makes text red

  buttons: []
  actionsLeft: [],
  actionsRight: [],
}

Список может:
- иметь слева иконки/галочки/изображения
- иметь строку поиска
- иметь счетчик в конце
- иметь алфавитный указатель
- содержать элементы или группы элементов
- допускать выделение
- допускать удаление
- допускать переупорядочивание

Группа может:
- иметь шапку (с опциональной ссылкой справа)
- иметь подвал
- допускать выделение
- допускать удаление
- допускать переупорядочивание


Элемент может:
- быть стандартным/средним/большим/информационным
- быть кликабельным
- иметь метку сверху (если информационный)
- иметь подзаголовок снизу (если средний или большой)
- иметь справа стрелку/переключатель/многоточие
- иметь значение/бейдж справа
- иметь набор кнопок (если большой)
- иметь набор действий по свайпу влево/вправо

*/
export default {
  name: 'AList',
  props: {
    value: Array
  },
  computed: {
    items() {
      let items = [];
      for (let item of this.value) {
        if (Array.isArray(item)) {
          items.push({
            groupHeader: true
          });
          for (let subitem of item) {
            items.push({
              group: null,
              item: subitem
            });
          }
          items.push({
            groupFooter: true
          });
        } else
        if (typeof item === 'object' && 'group' in item) {
          items.push({
            groupHeader: 'header' in item ? item.header : true,
          });
          for (let subitem of item.group) {
            items.push({
              group: item,
              item: subitem
            });
          }
          items.push({
            groupFooter: 'footer' in item ? item.footer : true,
          });
        } else {
          items.push({
            item: item
          })
        }
      }
      return items;
    },
    classList() {
      return [
      ];
    }
  },
  methods: {
    itemClassList(item) {
      return item ? [
        item.kind && `is-${item.kind}`,
        ('clickable' in item ? item.clickable : (item.onclick || ['primary', 'destructive'].includes(item.kind))) && `is-clickable`,
        item.selected && `is-selected`,
        item.active && `is-active`,
        item.disabled && `is-disabled`,
      ] : [];
    },
    itemInput(value, item, index) { // TODO: pass event up
      console.log('clicked', item, value);
    },
    itemClick(event, item, index) {
      item.onclick && item.onclick(event, item);
    }
  }
}
</script>