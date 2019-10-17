<template>
  <div>
    <label class="abz-input">
      <slot name="label">
        <span
          :class="{'error-name' : error}"
          v-if="!!label"
          class="abz-input__name">
          {{ label }}
        </span>
      </slot>
      <template v-if="!password">
        <input
        :class="{'error' : error}"
        v-model="onValue"
        :type="type === 'number'?'text':type"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
        class="abz-input__input"
        :placeholder="placeholder"
        v-if="type === 'number'"
        />
        <input
        :class="{'error' : error}"
        v-model.number="onValue"
        :type="type === 'AbzNumber'?'number':type"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
        class="abz-input__input"
        :placeholder="placeholder"
        v-else-if="type === 'AbzNumber'"
        />
        <input
        :class="{'error' : error}"
        v-model="onValue"
        v-mask="'+38(###) ### ## ##'"
        :type="type === 'tel'?'tel':type"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
        class="abz-input__input"
        :placeholder="placeholder"
        v-else-if="type === 'tel'"
        />
        <input
        :class="{'error' : error}"
        v-model="onValue"
        :type="type"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
        class="abz-input__input"
        :placeholder="placeholder"
        v-else
        />
      </template>
      <div class="abz-input__icon-wrapper" v-else>
        <input
        :class="{'error' : error}"
        v-model="onValue"
        :type="password"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
        class="abz-input__input"
        :placeholder="placeholder"
        />
      </div>
      <abz-transition name="bounce">
        <slot name="error">
          <span v-if="error" class="abz-input__error-span">{{ errorMessage }}</span>
        </slot>
      </abz-transition>
      <slot />
    </label>
  </div>
</template>
<script>
import AbzTransition from "../animation/AbzTransition";

export default {
  name: "AbzInput",
  components: {
    AbzTransition
  },
  props: {
    value: {
      type: [String, Boolean, Number]
    },
    type: {
      type: String,
      default: "text"
    },
    password: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String
    }
  },
  methods: {
    togglePassword() {
      const currentType = this.passwordVisibled;
      this.passwordVisibled = currentType === "password" ? "text" : "password";
    },
    updateData(value) {
      this.$emit("input", value);
      this.$forceUpdate();
    },
    updateNumberData(value) {
      if (!Number.isNaN(Number(value))) {
        this.$emit("input", value);
      }
      this.$forceUpdate();
    }
  },
  computed: {
    onValue: {
      get() {
        return this.value;
      },
      set(value) {
        if (String(this.type).toLowerCase() === "number") {
          this.updateNumberData(value);
        } else {
          this.updateData(value);
        }
      }
    }
  }
};
</script>
<style lang="scss">
$styles: "abz-input";
.#{$styles} {
  position: relative;
  @include flex-col;
  &__name {
    @include text($input-label, 400, $disabled-button-color);
    margin-bottom: 8px;
    line-height: 1.4;
    position: absolute;
    top: 2px;
    left: 12px;
    transform: translateY(-50%);
    display: inline-block;
    background-color: $bg-color;
    padding: 0 6px;
    &.error-name {
      color: $error-color;
    }
  }
  &__input {
    @extend %input;
  }
  &__error-span {
    @include text($input-label, 400, $error-color);
    padding-top: 4px;
  }
}
</style>
