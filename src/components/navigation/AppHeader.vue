<template>
  <div class="app-header">
    <div class="container">
      <div class="app-header__row">
        <a href="/" class="app-header__logo-link">
          <img src="@/assets/logo/logo.svg" alt="logo" class="app-header__logo">
        </a>
        <div class="app-header__burger">
          <icon-menu class="app-header__icon"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconMenu from '../icons/IconMenu';

export default {
  name: 'AppHeader',
  components: {
    IconMenu
  }
}
</script>
<style lang="scss">
$styles: 'app-header';
.#{$styles} {
  padding: 20px 0 16px;
  &__row {
    @include flex-row(space-between, center)
  }
  &__logo {
    width: 134px;
    height: 24px;
  }
  &__icon {
    @include svg(23px, $secondary-color);
  }
}
</style>