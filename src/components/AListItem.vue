<template>
  <div
    class="a-list-item"
    :class="classList"
    @click="$emit('click')">
    <div class="a-list-item__content">
      {{ title }}
      <div class="a-list-item__label" v-if="label">{{ label }}</div>
    </div>
    <div class="a-list-item__value" v-if="accessory !== 'switch' && value">
      {{ value }}
    </div>
    <a-switch
      class="a-list-item__accessory"
      v-else-if="accessory === 'switch'"
      v-model="value"
      :value-on="valueOn"
      :value-off="valueOff"
      @input="$emit('input', $event)"
    ></a-switch>
    <div class="a-list-item__accessory icon-chevron" v-if="accessory === 'chevron'"></div>
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
        return ['primary', 'destructive'].includes(this.kind);
      }
    },
    active: Boolean,
    selected: Boolean,
    disabled: Boolean,
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