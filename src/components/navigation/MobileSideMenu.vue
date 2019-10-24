<template>
  <div>
    <div class="mobile-side-menu">
      <header class="mobile-side-menu__header">
        <div class="mobile-side-menu__img-wrapper">
          <img :src="user.photo" alt="user" class="mobile-side-menu__img" />
        </div>
        <h4 class="mobile-side-menu__user-name">{{ user.name }}</h4>
        <p class="mobile-side-menu__email">{{ user.email }}</p>
      </header>
      <ul class="mobile-side-menu__list">
        <li class="mobile-side-menu__item">
          <a href="#about_me" class="mobile-side-menu__link">About me</a>
          </li>
        <li class="mobile-side-menu__item">
          <a href="#relationships" class="mobile-side-menu__link">Relationships</a>
          </li>
        <li class="mobile-side-menu__item">
          <a href="#requirements" class="mobile-side-menu__link">Requirements</a>
          </li>
        <li class="mobile-side-menu__item">
          <a href="#users" class="mobile-side-menu__link">Users</a>
          </li>
        <li class="mobile-side-menu__item">
          <a href="#sign_up" class="mobile-side-menu__link">Sign Up</a>
          </li>
        <li class="mobile-side-menu__item">
          <a href="#" class="mobile-side-menu__link">Sign Out</a>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "MobileSideMenu",
  computed: {
    ...mapState({
      user: ({ users }) => users.user
    })
  }
};
</script>
<style lang="scss">
$styles: "mobile-side-menu";
.#{$styles} {
  @include z-index(drawer);
  background-color: $bg-color;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  height: 100vh;
  &__header {
    padding: 30px 18px 24px;
    border-bottom: 1px solid $disabled-button-bg;
  }
  &__img-wrapper {
    margin-bottom: 12px;
  }
  &__img {
    $size: 70px;
    width: $size;
    height: $size;
    border-radius: 50%;   
    object-fit: cover;
  }
  &__user-name {
    font-size: $base-size;
    margin-bottom: 5px;
  }
  &__email {
    color: #8d8c8c;
    font-size: $input-label;
  }
  &__list {
    padding: 28px 18px 24px;
    @include flex-col;
  }
  &__item {
    margin-bottom: 20px;
  }
  &__link {
    line-height: 1.5;
    font-size: $base-size;
    font-family: $sec-font;
    color: $black;
  }
}
</style>