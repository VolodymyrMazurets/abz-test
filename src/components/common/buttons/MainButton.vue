<template>
  <a
    :href="anchor"
    class="main-button"
    :disabled="disabled"
    :class="{secondary: isSecondary}">
    <slot />
    <slot>
      <span v-if="label">{{ label }}</span>
    </slot>
  </a>
</template>
<script>
export default {
  name: "MainButton",
  props: {
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isSecondary: {
      type: Boolean,
      default: false
    },
    anchor: {
      type: String,
      default: "#"
    }
  }
};
</script>
<style lang="scss">
$styles: "main-button";
.#{$styles} {
  width: 100%;
  height: 40px;
  white-space: nowrap;
  background-color: $primary-color;
  @include flex-row(center, center);
  @include text($button-size, 700, $button-color);
  border-radius: 4px;
  padding: 0 24px;
  line-height: 1;
  border: 2px solid transparent;
  @include media {
    cursor: pointer;
    @include transition(all);
    max-width: 290px;
    &:hover {
      background-color: $primary-hover;
    }
  }
  &.secondary {
    border-color: $primary-color;
    background-color: transparent;
    color: $primary-color;
    @include media {
      &:hover {
      background-color: #fee6d2;
    }
    }
  }
  &:disabled {
    cursor: not-allowed;
    background-color: $disabled-button-bg;
    color: $disabled-button-color;
  }
}
</style>
