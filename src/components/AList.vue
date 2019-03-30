<template>
  <div
    class="a-list"
    :class="classList">
    <slot
      v-for="({ item, group, groupHeader, groupFooter }, index) in flatItems"
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
          :class="itemClassList(item)">
          {{ item.title || item }}
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
  kind: 'normal', 'medium', 'large', 'info', 'any-custom-kind'
  title
  icon / image / flag
  label
  accessory: '>', '...', 'switch'
  value / badge:

  imageRadius: false, 'min', 'small', 'normal', 'large', 'max', exact value

  clickable
  selected // checked (visible only if group isSelecting)
  active // highlighted (as on tap)
  disabled 
  primary  // makes text blue
  destructive // makes text red

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
    items: Array
  },
  computed: {
    flatItems() {
      let items = [];
      for (let item of this.items) {
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
            groupHeader: item.header,
          });
          for (let subitem of item.group) {
            items.push({
              group: item,
              item: subitem
            });
          }
          items.push({
            groupFooter: item.footer,
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
      return [
        item.clickable && `is-clickable`,
        item.selected && `is-selected`,
        item.active && `is-active`,
        item.primary && `is-primary`,
        item.destructive && `is-destructive`,
        item.disabled && `is-disabled`,
      ];
    }
  }
}
</script>