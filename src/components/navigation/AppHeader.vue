<template>
  <div>
    <div class="app-header">
      <div class="container">
        <div class="app-header__row">
          <a href="/" class="app-header__logo-link">
            <img src="@/assets/logo/logo.svg" alt="logo" class="app-header__logo" />
          </a>
          <ul class="app-header__list">
            <li class="app-header__item">
              <a href="#about_me" class="app-header__link">About me</a>
            </li>
            <li class="app-header__item">
              <a href="#relationships" class="app-header__link">Relationships</a>
            </li>
            <li class="app-header__item">
              <a href="#requirements" class="app-header__link">Requirements</a>
            </li>
            <li class="app-header__item">
              <a href="#users" class="app-header__link">Users</a>
            </li>
            <li class="app-header__item">
              <a href="#sign_up" class="app-header__link">Sign Up</a>
            </li>
          </ul>
          <div class="app-header__wrapper">
            <a href="#" class="app-header__burger" @click.prevent="$emit('show')">
              <icon-menu class="app-header__icon" />
            </a>
            <div class="app-header__user">
              <div class="app-header__user-wrapper">
                <h4 class="app-header__user-name">{{user.name}}</h4>
                <p class="app-header__email">{{user.email}}</p>
              </div>
              <div class="app-header__img-wrapper">
                <img :src="user.photo" alt="user" class="app-header__img" />
              </div>
            </div>
            <a href="#" class="app-header__logout">
              <icon-logout class="app-header__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconMenu from "../icons/IconMenu";
import IconLogout from "../icons/IconLogout";
import { mapState } from 'vuex'

export default {
  name: "AppHeader",
  components: {
    IconMenu,
    IconLogout
  },
  computed: {
    ...mapState({
      user: ({ users }) => users.user
    })
  }
};
</script>
<style lang="scss">
$styles: "app-header";
.#{$styles} {
  padding: 20px 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  @include z-index(navigation);
  background-color: $bg-color;
  &__row {
    @include flex-row(space-between, center);
  }
  &__logo {
    width: 134px;
    height: 24px;
    @include media($screen-tablet-pro) {
      margin-right: 65px;
    }
  }
  &__icon {
    @include svg(23px, $secondary-color);
    @include media($screen-tablet-pro) {
      @include transition(fill);
      &:hover {
        fill: $secondary-hover;
      }
    }
  }
  &__burger {
    @include media($screen-tablet-pro) {
      display: none;
    }
  }
  &__logout {
    display: none;
    @include media($screen-tablet-pro) {
      display: inline-block;
    }
  }
  &__wrapper {
    @include flex-row(flex-start, center);
  }
  &__user {
    display: none;
    @include media($screen-tablet-pro) {
      @include flex-row(flex-end, center);
      margin-right: 14px;
    }
  }
  &__user-wrapper {
    margin-right: 12px;
    text-align: right;
    @include flex-col(center, flex-end);
  }
  &__img-wrapper {
    $size: 40px;
    width: $size;
    height: $size;
  }
  &__img {
    $size: 40px;
    width: $size;
    height: $size;
    border-radius: 50%;
    object-fit: cover;
  }
  &__user-name {
    font-size: $small-size;
    font-family: $sec-font;

    font-weight: 400;
  }
  &__email {
    color: #8d8c8c;
    font-size: $input-label;
    font-weight: 400;
  }
  &__list {
    display: none;
    @include media($screen-tablet-pro) {
      @include flex-row;
      margin-right: 60px;
    }
  }
  &__item {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__link {
    font-family: $sec-font;
    @include text($base-size, 400, $black);
    @include transition(color);
    &:hover {
      color: $primary-color;
    }
  }
}
</style>