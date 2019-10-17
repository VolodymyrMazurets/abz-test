<template>
  <div class="app-footer">
    <div class="app-footer__nav">
      <a href="/" class="app-footer__logo-link">
        <icon-logo class="app-footer__logo" />
      </a>
      <ul class="app-footer__list">
        <li class="app-footer__item">
          <a href="#" class="app-footer__link">About me</a>
        </li>
        <li class="app-footer__item">
          <a href="#" class="app-footer__link">Relationships</a>
        </li>
        <li class="app-footer__item">
          <a href="#" class="app-footer__link">Requirements</a>
        </li>
        <li class="app-footer__item">
          <a href="#" class="app-footer__link">Users</a>
        </li>
        <li class="app-footer__item">
          <a href="#" class="app-footer__link">Sign Up</a>
        </li>
      </ul>
    </div>
    <div class="app-footer__social">
      <ul class="app-footer__list">
        <li class="app-footer__social-item">
          <a
            class="app-footer__link"
            href="mailto:work.of.future@gmail.com"
          >work.of.future@gmail.com</a>
        </li>
        <li class="app-footer__social-item">
          <a class="app-footer__link" href="tel:+38 (050) 789 24 98 ">+38 (050) 789 24 98</a>
        </li>
        <li class="app-footer__social-item">
          <a class="app-footer__link" href="tel:+38 (095) 556 08 45">+38 (095) 556 08 45</a>
        </li>
      </ul>
      <ul class="app-footer__social-networks">
        <li class="app-footer__social-networks-item">
          <a href="#" target="_blank" class="app-footer__social-networks-link">
            <icon-facebook />
          </a>
        </li>
        <li class="app-footer__social-networks-item">
          <a href="#" target="_blank" class="app-footer__social-networks-link">

          </a>
        </li>
        <li class="app-footer__social-networks-item">
          <a href="#" target="_blank" class="app-footer__social-networks-link">

          </a>
        </li>
        <li class="app-footer__social-networks-item">
          <a href="#" target="_blank" class="app-footer__social-networks-link">

          </a>
        </li>
        <li class="app-footer__social-networks-item">
          <a href="#" target="_blank" class="app-footer__social-networks-link">

          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import IconLogo from "../icons/IconLogo";
import IconFacebook from "../icons/IconFacebook";
export default {
  name: "AppFooter",
  components: {
    IconLogo,
    IconFacebook
  }
};
</script>
<style lang="scss">
$styles: "app-footer";
.#{$styles} {
  background-color: $secondary-color;
  &__nav {
    padding: 30px 0;
    @include flex-col(flex-start, center);
    border-bottom: 1px solid #5674b9;
    text-align: center;
  }
  &__logo-link {
    margin-bottom: 20px;
  }
  &__logo {
    width: 134px;
    height: 24px;
    fill: $bg-color;
  }
  &__item {
    margin-bottom: 12px;
  }
  &__link {
    color: $bg-color;
    font-family: $sec-font;
    line-height: 1;
  }
  &__social {
    padding: 30px 0;
    @include flex-col(flex-start, center);
    border-bottom: 1px solid #5674b9;
    text-align: center;
  }
  &__social-item {
    margin-bottom: 16px;
  }
}
</style>