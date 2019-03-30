<template>
  <div
    class="a-text-input"
    :class="classList">
    <input
      type="text"
      class="a-text-input__input"
      :value="value"/>
  </div>
</template>

<script>
/*
multiline
format? (for phones, card numbers etc.)
rich editing?
align
*/
export default {
  name: 'ATextInput',
  props: {
    value: String,
    disabled: Boolean,
    multiline: Boolean,
  },
  computed: {
    classList() {
      return [
        this.disabled && `is-disabled`,
      ];
    }
  },
  methods: {
  }
}
</script>