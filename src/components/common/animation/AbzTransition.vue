<template>
  <transition
    :name='name'
    :appear='appear'
    :mode="mode"
    >
      <slot/>
  </transition>
</template>
<script>
export default {
  name: 'AbzTransition',
  props: {
    name: {
      type: String,
      default: 'fade',
    },
    mode: {
      type: String,
      default: 'out-in',
    },
    appear: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import '~@/styles/plugins/animate';
.fade-enter-active {
  animation: fadeIn 0.2s;
}
.fade-leave-active {
  animation: fadeOut 0.2s;
}
.bounce-enter-active {
  animation: bounceIn 0.3s;
}
.bounce-leave-active {
  animation: fadeOut 0.2s;
}
.fadedown-enter-active {
  animation: fadeInDown 0.2s;
}
.fadedown-leave-active {
  animation: fadeOutDown 0.2s;
}
.rotate-enter-active {
  animation: rotateCaret 0.2s;
}
.rotate-leave-active {
  animation: rotateCaret 0.2s;
}

</style>
