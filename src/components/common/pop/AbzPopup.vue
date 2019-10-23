<template>
  <abz-transition>
    <div class="abz-popup" @click.self="close">
      <div class="abz-popup__card">
        <h4 class="abz-popup__title">Congratulations</h4>
        <p class="abz-popup__text">You have successfuly passed the registration</p>
        <a href="#" class="abz-popup__close" @click.prevent="close">ok</a>
      </div>
    </div>
  </abz-transition>
</template>
<script>
import AbzTransition from "../animation/AbzTransition";

export default {
  name: "AbzPopup",
  components: {
    AbzTransition
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss">
$styles: "abz-popup";
.#{$styles} {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  min-height: 100vh;
  @include z-index(popup);
  @include flex-row(center, center);
  background: rgba(0, 0, 0, 0.6);
  &__card {
    background-color: $bg-color;
    padding: 22px 24px;
    @include flex-col(stretch, stretch);
    height: initial;
    overflow-y: auto;
    position: relative;
    width: 100%;
    max-width: 290px;
    border-radius: 4px;
  }
  &__title {
    margin-bottom: 12px;
    font-size: $heading-3;
  }
  &__text {
    font-family: $sec-font;
    font-size: $base-size;
    line-height: 1.4;
    margin-bottom: 32px;
  }
  &__close {
    @include text($medium-size, 700, $primary-color);
    font-family: $sec-font;
    text-transform: uppercase;
    max-width: fit-content;
    align-self: flex-end;
  }
}
</style>

