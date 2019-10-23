<template>
  <div class="abz-select" @click="showOptions = !showOptions">
    <div class="abz-select__select">
      <span class="abz-select__name">
        {{value ? value.name : 'Select your position'}}
      </span>
      <span class="abz-select__arrow" :class='{rotate: showOptions}'></span>
    </div>
    <abz-transition>
      <ul class="abz-select__list" v-if="showOptions">
        <li
          class="abz-select__item"
          v-for="option in options"
          @click="selectOption(option)"
          :key="option.name"
        >
          <label :class="{selected: value.name == option.name}" class="abz-select__value">
            <input type="checkbox" class="abz-select__checkbox" :value="option" />
            {{option.name}}
          </label>
        </li>
      </ul>
    </abz-transition>
  </div>
</template>
<script>
import AbzTransition from '../animation/AbzTransition'
export default {
  name: "AbzSelect",
  components: {
    AbzTransition
  },
  data() {
    return {
      showOptions: false
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("input", option);
    }
  },
  props: {
    value: [Object, String, Number, Boolean],
    options: Array,
    name: {
      type: String,
      default: ''
    } 
  }
};
</script>
<style lang="scss">
$styles: "abz-select";
.#{$styles} {
  width: 100%;
  position: relative;
  &__select {
    @extend %select;
    @include flex-row(flex-start, center);
    position: relative;
  }
  &__arrow {
    background-color: transparent;
    border: 8px solid transparent;
    border-top-color: $black;
    display: block;
    position: absolute;
    right: 13px;
    top: 24px;
    &.rotate {
      transform: rotate(180deg);
      top: 14px;
    }
  }
  &__list {
    width: 100%;
    box-shadow: 0 3px 8px rgba(1, 1, 1, 0.24);
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    @include z-index(dropdown);
    background-color: $bg-color;
  }
  &__item {
    padding: 16px;
    &:hover {
      background-color: #fce2cc;
    } 
  }
  &__checkbox {
    display: none;
  }
  &__value {
    color: #393939;
    &.selected {
      color: $primary-color;
    }
  }
}
</style>