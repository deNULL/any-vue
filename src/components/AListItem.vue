<template>
  <div
    class="a-list-item"
    :class="classList"
    @click="$emit('click')">
    <div class="a-list-item__actions is-left" v-if="actionsLeft && actionsLeft.length">
      <div class="a-list-item__action" v-for="action in actionsLeft">
        <div class="a-list-item__action-icon"></div>
        {{ action.title }}
      </div>
    </div>
    <div class="a-list-item__actions is-right" v-if="actionsRight && actionsRight.length">
      <div class="a-list-item__action" v-for="action in actionsRight">
        <div class="a-list-item__action-icon"></div>
        {{ action.title }}
      </div>
    </div>
    <div class="a-list-item__body">
      <slot name="image">
        <div class="a-list-item__image" v-if="imageUrl" :style="{ background: `url(${imageUrl})` }"></div>
      </slot>
      <slot name="content">
        <div class="a-list-item__content">
          <div class="a-list-item__title" v-if="title"><slot>{{ title }}</slot></div>
          <div class="a-list-item__label" v-if="label"><slot name="label">{{ label }}</slot></div>
        </div>
      </slot>
      <slot name="value">
        <div class="a-list-item__value" v-if="accessory !== 'switch' && value">{{ value }}</div>
      </slot>
      <slot name="accessory">
        <a-switch
          class="a-list-item__accessory"
          v-if="accessory === 'switch'"
          v-model="value"
          :value-on="valueOn"
          :value-off="valueOff"
          @input="$emit('input', $event)"
        ></a-switch>
        <div class="a-list-item__accessory icon-chevron" v-if="accessory === 'chevron'"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AListItem',
  props: {
    kind: {
      type: String,
      default: 'normal',
    },
    title: String,
    label: String,
    imageUrl: String,
    accessory: String,
    value: null,
    valueOn: {
      default: true,
    },
    valueOff: {
      default: false,
    },
    clickable: {
      type: Boolean,
      default() {
        return ['primary', 'destructive'].includes(this.kind) || ['chevron', 'ellipsis'].includes(this.accessory);
      }
    },
    active: Boolean,
    selected: Boolean,
    disabled: Boolean,
    actionsLeft: Array,
    actionsRight: Array,
  },
  computed: {
    classList() {
      return [
        this.kind && `is-${this.kind}`,
        this.clickable && `is-clickable`,
        this.selected && `is-selected`,
        this.active && `is-active`,
        this.disabled && `is-disabled`,
      ];
    }
  }
}
</script>