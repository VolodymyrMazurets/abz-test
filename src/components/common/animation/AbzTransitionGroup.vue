<template>
  <transition-group
    name='fade'
    :appear='appear'
    tag="div"
    class="row"
    >
      <slot/>
  </transition-group>
</template>
<script>
export default {
  name: 'AbzTransitionGroup',
  props: {
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
  animation: fadeIn 0.4s;
}
.fade-leave-active {
  animation: fadeOut 0.4s;
}
</style>
